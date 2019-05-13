import React from 'react'
import { Card, Col, Row, Skeleton, Avatar, Icon } from 'antd'

const { Meta } = Card

export const ArtistsComponent = props => {
    const artists = props.artists
    if (artists)
        return (
            <Row>
                {artists.map((artist, index) => (
                    <Col xs={24} sm={16} md={6} key={index}>
                        <Card
                            size="small"
                            data-key={index}
                            bordered={true}
                            actions={[
                                <Icon size="small" type="eye" onClick={() => props.setCurrentArtist(artist)}/>,
                            ]}
                        >
                            <Skeleton loading={props.loading}>
                                <Meta
                                    avatar={
                                        <Avatar
                                            src={
                                                artist.images[0] &&
                                                artist.images[0].url
                                            }
                                        />
                                    }
                                    title={artist.name}
                                    description={
                                        artist.genres[0]
                                            ? artist.genres[0]
                                            : 'N/A'
                                    }
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
}
