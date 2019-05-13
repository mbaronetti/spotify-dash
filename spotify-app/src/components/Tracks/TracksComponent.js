import React from 'react'
import { Card, Col, Row, Skeleton, Avatar, Icon } from 'antd'

const { Meta } = Card

export const TracksComponent = props => {
    const tracks = props.tracks
    if (tracks)
        return (
            <Row>
                {tracks.map((track, index) => (
                    <Col xs={24} key={index}>
                        <Card
                            size="small"
                            data-key={index}
                            bordered={false}
                        >
                            <Skeleton loading={props.loading}>
                                <Meta
                                    title={track.name}
                                    description={
                                        <ul>
                                            <li>
                                                <strong>Artist: </strong>
                                                {track.artists[0].name}
                                            </li>
                                        </ul>
                                    }
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
        return null
}
