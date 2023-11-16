import React, { Component } from 'react';
import { Button, Table, Avatar } from 'antd';
import avatar from '@/assets/user.png'
import './index.less';
export default class User extends Component{
    state = {
        dataSource: [
            {
                key: '1',
                name: '胡彦斌',
                sexy: '男', 
                avatar: avatar,
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡歌',
                sexy: '男',
                avatar: avatar,
                age: 42,
                address: '西湖区湖底公园1号',
            }
        ],
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                render: (text, record, index) => (
                    <div>
                        <Avatar src={record.avatar}></Avatar>
                        <span className="user-name">{text}</span>
                    </div>
                )
            },
            {
                title: '性别',
                dataIndex: 'sexy',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
            }
        ]
    } 
    addUser = () => {

    }
    render() {
        return (
            <div>
                <Button 
                    type="primary" 
                    icon="plus" 
                    className="tools-button"
                    onClick={this.addUser}
                >添加员工</Button>
                <Table 
                    columns={this.state.columns} 
                    dataSource={this.state.dataSource}
                    size="middle"
                    bordered={false}
                    />
            </div>
        )
    }
}