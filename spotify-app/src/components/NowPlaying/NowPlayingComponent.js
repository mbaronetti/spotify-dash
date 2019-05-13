import React from 'react'
import { Badge, Icon, Comment, Avatar } from 'antd'

export const NowPlayingComponent = props => {
    return (
        <div>
            <Comment
                author={props.artist}
                avatar={<Avatar src={props.image} alt="Album" />}
                content={
                    <div>
                        <p>{props.song}</p>
                        <a href="#">Details...</a>
                    </div>
                }
            />
        </div>
    )
}
