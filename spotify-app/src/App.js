import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
import logo from './media/logo.png'
import people from './media/people.png'
import { Empty, Card } from 'antd'
import SearchContainer from './components/Search/SearchContainer'
import { Layout } from './components/Layout/Layout'
import ArtistContainer from './components/Artist/ArtistContainer'
import ArtistsContainer from './components/Artists/ArtistsContainer'
import TracksContainer from './components/Tracks/TracksContainer'
import { Col, Row } from 'antd'
import { connect } from 'react-redux'
import { getHashParams, redirectToAuth } from './components/Helpers'
import { showModal, getArtists, getNowPlaying } from './redux/actions/index'
import './App.css'

const spotifyApi = new Spotify()

const mapDispatchToProps = dispatch => {
    return {
        showModal: val => dispatch(showModal(val)),
        getArtists: name => dispatch(getArtists(name)),
        getNowPlaying: data => dispatch(getNowPlaying()),
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.modalVisible,
        artists: state.artists,
        nowPlaying: state.nowPlaying,
        tracks: state.tracks,
    }
}

const params = getHashParams()
const loggedIn = params.access_token ? true : false
const accessToken = params.access_token ? params.access_token : ''

class App extends Component {
    componentDidMount() {
        if (loggedIn) {
            spotifyApi.setAccessToken(accessToken)
        } else {
            redirectToAuth(true)
        }
    }
    render() {
        const { artists, tracks } = this.props
        if (loggedIn)
            return (
                <div className="App spfy-app">
                    <Layout
                        header={
                            <span>
                                <img src={logo} alt="logo" id="logo" />
                                <SearchContainer />
                            </span>
                        }
                    >
                        {artists || tracks ? (
                            <Row>
                                <Col xs={24} md={6}>
                                    <Card title="Tracks">
                                        <TracksContainer />
                                    </Card>
                                </Col>
                                <Col xs={24} md={4}>
                                    <ArtistContainer />
                                </Col>
                                <Col xs={24} md={14}>
                                    <Card>
                                        <ArtistsContainer />
                                    </Card>
                                </Col>
                            </Row>
                        ) : (
                            <Empty
                                image={people}
                                imageStyle={{
                                    height: 'initial',
                                    opacity: '.25',
                                }}
                                description={
                                    <span
                                        style={{
                                            color: '#fff',
                                            opacity: '.15',
                                        }}
                                    >
                                        No data to display
                                    </span>
                                }
                            />
                        )}
                    </Layout>
                </div>
            )
        return null
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
