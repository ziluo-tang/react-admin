import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
const { Item } = Form;
class Register extends Component{
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register">
                <Form>
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
                            getFieldDecorator('confirm', {
                                rules: [
                                    { required: true, message: '请确认密码' },
                                    { whitespace: true, message: '请确认密码'}
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="确认密码"
                                />
                            )
                        }
                    </Item>
                </Form>
            </div>
        );
    }
}   
export default Form.create({name: 'register-form'})(withRouter(Register))
