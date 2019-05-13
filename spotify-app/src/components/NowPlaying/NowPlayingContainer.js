import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NowPlayingComponent } from './NowPlayingComponent'
import { getNowPlaying } from '../../redux/actions/index'

const mapStateToProps = state => {
    return {
        nowPlaying: state.nowPlaying,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNowPlaying: data => dispatch(getNowPlaying()),
    }
}
class NowPlayingContainer extends Component {
    componentDidMount() {
        const { getNowPlaying } = this.props
        setInterval(getNowPlaying, 2500)
    }
    render() {
        const { nowPlaying } = this.props
        if (nowPlaying)
            return (
                <NowPlayingComponent
                    artist={nowPlaying.artists[0].name}
                    image={nowPlaying.album.images[0].url}
                    song={nowPlaying.name}
                />
            )
        return null
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NowPlayingContainer)
