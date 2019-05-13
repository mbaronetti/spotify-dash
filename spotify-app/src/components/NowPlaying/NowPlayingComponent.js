import React from 'react'
import { Comment, Avatar } from 'antd'

export const NowPlayingComponent = props => {
    return (
        <div className="now-playing-container">
            <h4>Now playing</h4>
            <Comment
                author={props.artist}
                avatar={<Avatar src={props.image} alt="Album" />}
                content={
                    <div>
                        <p>{props.song}</p>
                    </div>
                }
            />
        </div>
    )
}
