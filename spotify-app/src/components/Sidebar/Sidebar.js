import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export const Sidebar = props => {
  return (
      <Sider width={props.width}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={props.handleClick}
        >
          <SubMenu key="sub1" title={<span><Icon type="home"/>{props.title}</span>}>
            {props.menuItems}
          </SubMenu>
        </Menu>
      </Sider>
    )

}
