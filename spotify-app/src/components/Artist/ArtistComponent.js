import React from 'react'
import { Card, Icon, Skeleton } from 'antd'
import imgPlaceholder from '../../media/placeholder.gif'

const { Meta } = Card

export const ArtistComponent = props => {
    const artist = props.artist
    return (
        <Card
            cover={<img alt="example" src={artist.images[0]?artist.images[0].url:imgPlaceholder} />}
        >
                <Meta
                    title={artist.name}
                    description={
                        <ul>
                            <li>
                                <strong>Genre: </strong>
                                {artist.genres[0]
                                    ? artist.genres[0]
                                    : 'N/A'}
                            </li>
                            <li>
                                <strong>Followers: </strong>
                                <span
                                    className={
                                        artist.followers.total <
                                        100000
                                            ? 'tomato'
                                            : 'green'
                                    }
                                >
                                    {artist.followers.total}
                                </span>
                            </li>
                        </ul>
                    }
                />
        </Card>
    )
}
