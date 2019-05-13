import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistComponent } from './ArtistComponent'

const mapStateToProps = state => {
    return {
        currentArtist: state.currentArtist,
        loading: state.loadingArtists,
    }
}
class ArtistContainer extends Component {
    componentDidMount() {}
    render() {
        const { currentArtist , loading} = this.props
        if (currentArtist) return <ArtistComponent artist={currentArtist} loading={loading}/>
        return null
    }
}

export default connect(mapStateToProps)(ArtistContainer)
