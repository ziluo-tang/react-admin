import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.less';

const { Item } = Form;
class Login extends Component{
    handleSubmit= e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                localStorage.setItem('user', JSON.stringify({
                    name: values.username,
                    password: values.password
                }));
                this.props.history.push('/admin/home');
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-logo">
                    <img src="/assets/logo.svg" alt="logo"/>
                    <span>REACT ADMIN</span>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Item>
                    {
                        getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '请输入用户名' },
                                { whitespace: true, message: '请输入用户名'}
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        )
                    }
                    </Item>
                    <Item>
                    {
                        getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请输入密码' },
                                { whitespace: true, message: '请输入密码'}
                            ]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        )
                    }
                    </Item>
                    <Item>
                    {
                        getFieldDecorator('remember', { 
                            valuePropName: 'checked', 
                            initialValue: true
                        })(<Checkbox>记住密码</Checkbox>)
                    }
                        <a className="login-form-forgot" href="##">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Item>
                </Form>
            </div>
        );
    }
}
export default Form.create({ name: 'login-form' })(withRouter(Login))