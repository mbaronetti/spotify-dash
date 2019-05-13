import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TracksComponent } from './TracksComponent'

const mapStateToProps = state => {
    return {
        tracks: state.tracks,
        loading: state.loadingArtists,
    }
}

class TracksContainer extends Component {
    componentDidMount() {}
    render() {
        const { tracks , loading} = this.props
        if (tracks && Array.isArray(tracks)) return <TracksComponent tracks={tracks} loading={loading} />
        return null
    }
}

export default connect(mapStateToProps)(TracksContainer)
