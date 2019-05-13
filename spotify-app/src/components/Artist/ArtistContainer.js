import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistComponent } from './ArtistComponent'

const mapStateToProps = state => {
    return {
        currentArtist: state.currentArtist,
    }
}
class ArtistContainer extends Component {
    componentDidMount() {}
    render() {
        const { currentArtist } = this.props
        if (currentArtist) return <ArtistComponent artist={currentArtist} />
        return null
    }
}

export default connect(mapStateToProps)(ArtistContainer)
