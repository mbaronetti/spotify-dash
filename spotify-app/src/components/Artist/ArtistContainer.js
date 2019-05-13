import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistComponent } from './ArtistComponent'

const mapStateToProps = state => {
    return {
        currentArtist: state.currentArtist
    }
}
class ArtistContainer extends Component {
    componentDidMount() {
    }
    render() {
        const { currentArtist } = this.props
        if (currentArtist)
            return (
                <ArtistComponent cover={currentArtist.images[0] && currentArtist.images[0].url}
                />
            )
        return null
    }
}

export default connect(mapStateToProps)(ArtistContainer)
