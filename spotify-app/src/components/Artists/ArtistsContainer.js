import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistsComponent } from './ArtistsComponent'

const mapStateToProps = state => {
    return {
        artists: state.artists,
        loadingArtists: state.loadingArtists
    }
}
class ArtistsContainer extends Component {
    componentDidMount() {
    }
    render() {
        const { artists , loadingArtists } = this.props
        if (artists)
            return (
                <ArtistsComponent
                    artists={artists}
                    loading={loadingArtists}
                />
            )
        return null
    }
}

export default connect(mapStateToProps)(ArtistsContainer)
