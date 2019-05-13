import React from 'react'
import NowPlayingContainer from '../NowPlaying/NowPlayingContainer'
import ListOrderedContainer from '../ListOrdered/ListOrderedContainer'

export const SidebarComponent = props => {
    return (
        <aside>
            <NowPlayingContainer />
            <ListOrderedContainer />
        </aside>
    )
}
