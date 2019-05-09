import React from 'react'
import { Card, Icon, Avatar, Skeleton } from 'antd'

const { Meta } = Card

export const ArtistComponent = props => {
    //const artists = props.artists
    return (
        <Card
            cover={<img alt="example" src={props.cover} />}
            actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />,
            ]}
        >
                <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={props.name}
                    description="This is the description"
                />
        </Card>
    )
}
