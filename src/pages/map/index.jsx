import React, { Component } from "react";
import "./index.less";
export default class CMap extends Component {
  componentDidMount() {
    this.renderMap();
  }

  getPosition = () => {
    const position = {
      x: 116.404,
      y: 39.915,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        position.x = p.coords.longitude;
        position.y = p.coords.latitude;
      });
    }
    return position;
  };

  renderMap = () => {
    this.map = new window.BMap.Map("map-container");
    const { x, y } = this.getPosition();
    let point = new window.BMap.Point(x, y); // 创建点坐标
    this.map.centerAndZoom(point, 15);
    this.map.enableScrollWheelZoom(true);
  };
  render() {
    return <div id="map-container" className="map-container"></div>;
  }
}
