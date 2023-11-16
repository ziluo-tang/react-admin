import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import './index.less';
export default () => {
  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const iceConfig = useRef({});
  const localPeerConnection = useRef();
  const remotePeerConnection = useRef();
  const [isOpen, setOpen] = useState(false);
  const [isCalling, setCalling] = useState(false);

  const createConnection = async () => {
    localPeerConnection.current = new RTCPeerConnection(iceConfig.current);
    remotePeerConnection.current = new RTCPeerConnection(iceConfig.current);

    localPeerConnection.current.addEventListener(
      'icecandidate',
      async (event) => {
        try {
          await remotePeerConnection.current.addIceCandidate(event.candidate);
        } catch (error) {
          console.log('local addIceCandidate error ');
        }
      },
    );
    remotePeerConnection.current.addEventListener(
      'icecandidate',
      async (event) => {
        try {
          await localPeerConnection.current.addIceCandidate(event.candidate);
        } catch (error) {
          console.log('remote addIceCandidate error');
        }
      },
    );
    localPeerConnection.current.addEventListener(
      'iceconnectionstatechange',
      (e) => {
        console.log(localPeerConnection.current.iceConnectionState);
      },
    );
    remotePeerConnection.current.addEventListener(
      'iceconnectionstatechange',
      (e) => {
        console.log(remotePeerConnection.current.iceConnectionState);
      },
    );
    addRemoteStream();
    videoRef.current.srcObject.getTracks().forEach((track) => {
      localPeerConnection.current.addTrack(track, videoRef.current.srcObject);
    });
    try {
      const offer = await localPeerConnection.current.createOffer();
      await transformOffer(offer);
    } catch (error) {
      console.log('local create offer error');
    }
  };

  const transformOffer = async (offer) => {
    try {
      await localPeerConnection.current.setLocalDescription(offer);
    } catch (error) {
      console.log('local setLocalDescription error');
    }
    try {
      remotePeerConnection.current.setRemoteDescription(
        new RTCSessionDescription(offer),
      );
      const answer = await remotePeerConnection.current.createAnswer();
      await transformAnswer(answer);
    } catch (error) {
      console.log('remote create answer error');
    }
  };

  const transformAnswer = async (answer) => {
    try {
      await remotePeerConnection.current.setLocalDescription(answer);
    } catch (error) {
      console.log('remote setLocalDescription error');
    }

    try {
      localPeerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer),
      );
    } catch (error) {
      console.log('local receive answer error');
    }
  };

  const onOpen = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 500,
          height: 300,
          frameRate: 15, //帧率
          facingMode: 'enviroment', //后置摄像头
        },
        audio: true,
      })
      .then(async (stream) => {
        videoRef.current.srcObject = stream;
        setOpen(true);
      })
      .catch((err) => {
        console.error('Error accessing media devices.', err);
      });
  };

  const addRemoteStream = () => {
    const remoteStream = new MediaStream();
    remoteVideoRef.current.srcObject = remoteStream;
    remotePeerConnection.current.addEventListener('track', async (event) => {
      remoteStream.addTrack(event.track, remoteStream);
      if (!isCalling) {
        setCalling(true);
      }
    });
  };

  const onCall = async () => {
    await createConnection();
  };

  const onClose = () => {
    // eslint-disable-next-line no-unused-expressions
    localPeerConnection.current?.close();
    // eslint-disable-next-line no-unused-expressions
    remotePeerConnection.current?.close();
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((element) => {
      element.stop();
    });
    setOpen(false);
    setCalling(false);
  };

  return (
    <>
      <div className={'video-wrap'}>
        <video className={'video'} ref={videoRef} autoPlay playsInline />
        <video ref={remoteVideoRef} className={'video'} autoPlay playsInline />
      </div>
      <div className={'toolbar'}>
        <Button type="primary" onClick={onOpen} disabled={isOpen}>
          开播
        </Button>
        <Button type="dashed" onClick={onCall} disabled={isCalling || !isOpen}>
          连线
        </Button>
        <Button type="danger" onClick={onClose} disabled={!isOpen}>
          下播
        </Button>
      </div>
    </>
  );
};
