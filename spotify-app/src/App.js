import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
//import logo from "./logo.svg";
import { Modal, Button , Empty } from 'antd'
import SearchContainer from './components/Search/SearchContainer'
import { Layout } from './components/Layout/Layout'
import NowPlayingContainer from './components/NowPlaying/NowPlayingContainer'
import ArtistsContainer from './components/Artists/ArtistsContainer'
import ArtistContainer from './components/Artist/ArtistContainer'
import { Col, Row} from 'antd'
import { connect } from 'react-redux'
import { getHashParams, redirectToAuth } from './components/Helpers'
import { showModal, getArtists, getNowPlaying} from './redux/actions/index'
import './App.css'

const spotifyApi = new Spotify()

const mapDispatchToProps = dispatch => {
    return {
        showModal: val => dispatch(showModal(val)),
        getArtists: name => dispatch(getArtists(name)),
        getNowPlaying: data => dispatch(getNowPlaying())
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.modalVisible,
        artists: state.artists,
        nowPlaying: state.nowPlaying,
    }
}

const params = getHashParams()
const loggedIn = params.access_token ? true : false
const accessToken = params.access_token ? params.access_token : ''

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (loggedIn) {
            spotifyApi.setAccessToken(accessToken)
        } else {
            redirectToAuth(true)
        }
    }
    render() {
        const { modalVisible, showModal, artists } = this.props
        if (loggedIn)
            return (
                <div className="App">
                    <Layout header={<SearchContainer />}>
                        {artists && artists.length > 0?<Row>
                            <Col xs={24} md={6}>
                                <ArtistContainer />
                            </Col>
                                <Col xs={24} md={18}>
                                    <ArtistsContainer/>
                                </Col>
                        </Row>
                        :
                        <Empty />
                        }
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
