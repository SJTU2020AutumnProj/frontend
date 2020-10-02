import 'antd/dist/antd.css';
import './headercss.css';
import logo from '../../assets/logo.png';

import { DownOutlined } from '@ant-design/icons';
import { Col, Dropdown, Input, Menu, Row } from 'antd';
import React from 'react';

const { Search } = Input;

class Header extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a href={'#'}>Item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>Item 2</a>
        </Menu.Item>
        <Menu.Item>
          <a href={'#'}>Item 3</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="header">
        <div className="header-wrapper">
          <Row style={{ height: 28 }}>
            <Col span={1} style={{ height: 28 }}>
              <img src={logo} alt={'logo'} height={40} width={40}/>
            </Col>
            <Col span={2} style={{ height: 28 }}>
              <Dropdown overlay={menu}>
                <a className="header-link" onClick={(e) => e.preventDefault()}>
                  Hover me <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={1} style={{ height: 28 }}>
              <a className="header-link">link1</a>
            </Col>
            <Col span={1} style={{ height: 28 }}>
              <a className="header-link">link2</a>
            </Col>
            <Col span={4} style={{ height: 28 }}>
              <Search placeholder="input search text" onSearch={(value) => console.log(value)} style={{ width: 200, height: 28 }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;
