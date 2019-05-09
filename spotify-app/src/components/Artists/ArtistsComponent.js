import React from 'react'
import { Card, Col, Row, Skeleton } from 'antd'

const { Meta } = Card

const cardStyle = {
    height: '180px',
    textAlign: 'center',
    margin: '1px',
}

export const ArtistsComponent = props => {
    const artists = props.artists
    if (artists)
        return (
            <Row>
                {artists.map(artist => (
                    <Col xs={24} sm={16} md={3}>
                        <Card size="small" style={cardStyle} bordered={false}>
                            <Skeleton loading={props.loading}>
                                <img
                                    src={
                                        artist.images[0] && artist.images[0].url
                                    }
                                />
                                <Meta
                                    description={artist.name}
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
}
