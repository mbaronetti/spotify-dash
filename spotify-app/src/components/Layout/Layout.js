import React from 'react'
import { Layout as AntLayout } from 'antd'
import { SidebarComponent } from '../Sidebar/SidebarComponent'
const { Header, Content } = AntLayout

export const Layout = props => {
    return (
        <AntLayout>
            <Header className="bg-dark-grey">
                {props.header}
            </Header>
            <AntLayout>
                <AntLayout>
                    <SidebarComponent />
                    <Content className="content">{props.children}</Content>
                </AntLayout>
            </AntLayout>
        </AntLayout>
    )
}
