import React from 'react'
import { Badge, Icon, Comment, Avatar } from 'antd'

export const NowPlayingComp = props => {
    return (
        <div>
            <Comment
                author={props.artist}
                avatar={
                    <Avatar
                        src={props.image}
                        alt="Album"
                    />
                }
                content={
                    <p>
                        {props.song}
                    </p>
                }
            />
        </div>
    )
}
