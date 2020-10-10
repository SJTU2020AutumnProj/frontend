import './LoginHeader.css';

import {BellOutlined, CaretDownOutlined, PlusOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Badge, Col, Dropdown, Input, Menu, Row} from "antd";
import React from 'react';

import logo from "../../assets/logo.png";
const { Search } = Input;

class LoginedHeader extends React.Component {
    render () {
        const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
        );

        return (
            <div className="header">
                <div className="header-wrapper">
                    <Row style={{ height: 28 }}>
                        <Col span={1} style={{ height: 28, paddingLeft:15}}>
                            <a href={'/'}>
                                <img src={logo} alt={'logo'} height={30} width={30} />
                            </a>
                        </Col>
                        <Col span={4} style={{ height: 28 }}>
                            <Search placeholder="搜索课程" onSearch={(value) => console.log(value)}  className="logined-search" />
                        </Col>
                        <Col style={{ height: 28, marginLeft:-40 }}>
                            <a href={'/'} className="header-link">首页</a>
                        </Col>
                        <Col style={{ height: 28, marginLeft:20 }}>
                            <a href={'/class'} className="header-link">近期要做</a>
                        </Col>
                        <Col style={{ height: 28, marginLeft:20 }}>
                            <a href={'/homework'} className="header-link">近期反馈</a>
                        </Col>
                        <Col style={{ height: 28, marginLeft:20 }}>
                            <a href={'/release'} className="header-link">发现课程</a>
                        </Col>
                        <Col style={{ height: 28, marginLeft:20 }}>
                            <a href={'/correct'} className="header-link">课程推荐</a>
                        </Col>
                        {/* <Col span={1} style={{ height: 28, marginLeft:10 }}>*/}
                        {/*  <a href={'/score'}className="header-link">我的分数</a>*/}
                        {/* </Col>*/}
                        <Col offset={14} style={{paddingTop:7, marginRight:5, paddingLeft:40}}>
                            <BellOutlined style={{color:"white", fontSize:18 }} />
                            <Badge status="processing" style={{marginTop:-10}}/>
                        </Col>
                        <Col style={{paddingTop:6}}>
                            <Dropdown overlay={menu} trigger={['click']} className="mydropdown">
                                <div>
                                    <PlusOutlined style={{color:"white"}}/>
                                    <CaretDownOutlined style={{color:"white", fontSize:12}}/>
                                </div>
                            </Dropdown>
                        </Col>
                        <Col style={{marginLeft:10}}>
                            <Dropdown overlay={menu} trigger={['click']} className="mydropdown">
                                <div>
                                    <Avatar icon={<UserOutlined />} style={{marginTop:-3}}/>
                                    <CaretDownOutlined style={{color:"white", marginLeft:2, marginTop:11, fontSize:12}}/>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default LoginedHeader;
