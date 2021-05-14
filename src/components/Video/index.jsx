import React, { Component } from 'react'
import { Statistic, Modal, Button } from 'antd'
import { connect } from 'react-redux'
const { Countdown } = Statistic
function mapStateToProps(state) {
  return {}
}

class Video extends Component {
  constructor() {
    super()
    this.state = {}
  }
  setCountDown = () => {
    let timeout
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState({
        isSleep: true,
      })
      this.deadline = Date.now() + 10 * 1000
    }, 2 * 1000)
  }
  onClose = () => {
    console.log('close')
  }
  onContinue = () => {
    console.log('continue')
  }
  componentDidMount() {
    this.setCountDown()
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: '#000',
          width: '400px',
          height: '300px',
          position: 'relative',
        }}
      >
        <video style={{ width: '100%', height: '100%' }} autoPlay muted></video>
        {this.state.isSleep && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(25,25,112,0.7)',
            }}
          >
            <p style={{ textAlign: 'center', color: '#fff', fontSize: '16px' }}>
              视频已观看一段时间，是否继续观看？
            </p>
            <div style={{ textAlign: 'center' }}>
              <Button type="default" onClick={this.onClose}>
                关闭（
                <Countdown
                  style={{ display: 'line-block' }}
                  format="s"
                  value={Date.now() + 10 * 1000}
                  onFinish={this.onClose}
                />
                S）
              </Button>
              <Button type="default" onClick={this.onContinue}>
                继续
              </Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Video)
