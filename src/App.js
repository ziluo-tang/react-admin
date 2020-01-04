import React, {Component} from 'react';
import './App.css';
export default class extends Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
