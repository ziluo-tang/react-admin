import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sayHello } from '@/store/action';
import './index.less';
class Home extends Component{
    componentDidMount() {
        this.props.onTextInit();
    }
    render() {
        return (
            <div className="home">
                Welcome to react-admin
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text
});

const mapDispatchToProps = dispatch => ({
    onTextInit: () => {
        dispatch(sayHello('hello, welcome to redux'))
    },
    onTextClick: () => {
        dispatch(sayHello('Store state clicked'))
    },
    onTextChange: () => {
        dispatch(sayHello('Store state changed'))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));