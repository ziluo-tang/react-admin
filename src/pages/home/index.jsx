import React, { Component } from 'react'
import { Button } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Actions } from '@/store/action'
import './index.less'
class Home extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="home">
        <div>Welcome to react-admin</div>
        <Button
          type="primary"
          onClick={() => this.props.collapsedToggle(!this.props.collapsed)}
        >
          toggle collapsed
        </Button>
        <Button
          type="dashed"
          onClick={() =>
            this.props.login({ username: 'tangxiaoxin', password: 'sfjbskf' })
          }
        >
          login
        </Button>
      </div>
    )
  }
}

export default connect(
  (state) => ({ collapsed: state.sliderToggle.collapsed }),
  (dispatch) => bindActionCreators(Actions, dispatch)
)(withRouter(Home))
