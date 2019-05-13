import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ArtistsComponent } from './ArtistsComponent'
import { setCurrentArtist } from '../../redux/actions/index'

const mapStateToProps = state => {
    return {
        artists: state.artists,
        loadingArtists: state.loadingArtists,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCurrentArtist: index => dispatch(setCurrentArtist(index)),
    }
}

class ArtistsContainer extends Component {
    componentDidMount() {}
    render() {
        const { artists, loadingArtists, setCurrentArtist } = this.props
        if (artists)
            return (
                <ArtistsComponent
                    artists={artists}
                    loading={loadingArtists}
                    setCurrentArtist={setCurrentArtist}
                />
            )
        return null
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistsContainer)
