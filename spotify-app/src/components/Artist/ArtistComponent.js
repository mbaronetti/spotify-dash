import React from 'react'
import { Card, Icon, Skeleton } from 'antd'

const { Meta } = Card

export const ArtistComponent = props => {
    //const artists = props.artists
    return (
        <Card
            cover={<img alt="example" src={props.cover} />}
        >
                <Meta
                    title={props.name}
                    description="This is the description"
                />
        </Card>
    )
}
