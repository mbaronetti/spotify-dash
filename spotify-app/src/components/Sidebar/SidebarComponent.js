import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import NowPlayingContainer from '../NowPlaying/NowPlayingContainer'

const { SubMenu } = Menu;
const { Sider } = Layout;

export const SidebarComponent = props => {
  return (
      <aside>
          <NowPlayingContainer />
      </aside>
    )

}
