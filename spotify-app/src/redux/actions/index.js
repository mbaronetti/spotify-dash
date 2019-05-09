//ACTIONS
import {
    SHOW_MODAL,
    SET_DATA,
    SET_IMAGES,
    SEARCH_TERM,
    SET_ARTISTS,
    GET_NOW_PLAYING,
    SET_NOW_PLAYING,
    LOADING_ARTISTS
} from '../constants'
import Spotify from 'spotify-web-api-js'

const spotifyApi = new Spotify()

export const showModal = data => {
    return {
        type: SHOW_MODAL,
        data,
    }
}

export const onSearch = data => {
    return {
        type: SEARCH_TERM,
        data,
    }
}

export const setNowPlaying = data => {
    return {
        type: SET_NOW_PLAYING,
        data,
    }
}

export const loadingArtists = data => {
    return {
        type: LOADING_ARTISTS,
        data,
    }
}

export const getNowPlaying = () => {
    return dispatch => {
        spotifyApi.getMyCurrentPlaybackState().then(data => {
            return dispatch(setNowPlaying(data.item))
        })
    }
}

export const setArtists = data => {
    return {
        type: SET_ARTISTS,
        data,
    }
}

export const getArtists = name => {
    return dispatch => {
        dispatch(loadingArtists(true))
        dispatch(onSearch(name))
        spotifyApi
            .searchArtists(name.length > 0 ? name : ' ' , {limit:25})
            .then(response => {
                const artists = response.artists.items
                dispatch(loadingArtists(false))
                return dispatch(setArtists(artists))
            })
            .catch(e => console.log(e))
    }
}
