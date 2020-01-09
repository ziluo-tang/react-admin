import React, { Component } from 'react';
import './index.less';
export default class CMap extends Component{
    componentDidMount() {
        this.renderMap();
    }
    renderMap = () => {
        this.map = new window.BMap.Map("map-container"); 
        let point = new window.BMap.Point(116.404, 39.915);  // 创建点坐标  
        this.map.centerAndZoom(point, 15);
        this.map.enableScrollWheelZoom(true);
    }
    render() {
        return (
            <div id="map-container" className="map-container"></div>
        )
    }
}