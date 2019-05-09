import React from 'react'
import { Layout as AntLayout } from 'antd'
import { Sidebar } from '../Sidebar/Sidebar'
const { Header, Content } = AntLayout

export const Layout = props => {
    return (
        <AntLayout>
            <Header>
                {props.header}
            </Header>
            <AntLayout>
                <AntLayout>
                    <Sidebar />
                    <Content className="content">{props.children}</Content>
                </AntLayout>
            </AntLayout>
        </AntLayout>
    )
}
