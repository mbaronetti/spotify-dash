//ACTIONS
import {
    SHOW_MODAL,
    SET_DATA,
    SET_IMAGES,
    SEARCH_TERM,
    SET_ARTISTS,
    GET_NOW_PLAYING,
    SET_NOW_PLAYING,
    LOADING_ARTISTS,
    SET_CURRENT_ARTIST,
    SET_TOP_ARTISTS,
    SEARCH_TYPE
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


export const setArtists = data => {
    return {
        type: SET_ARTISTS,
        data,
    }
}

export const setCurrentArtist = data => {
    return {
        type: SET_CURRENT_ARTIST,
        data,
    }
}

export const setTopArtists = data => {
    return {
        type: SET_TOP_ARTISTS,
        data,
    }
}

export const setSearchType = data => {
  console.log('radio checked', data);
    return {
        type: SEARCH_TYPE,
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
export const getTopArtists = () => {
    return dispatch => {
        spotifyApi
            .getMyTopArtists()
            .then(response => {
                console.log(response);
                dispatch(setTopArtists(response))
            })
            .catch(e => console.log(e))
    }
}

export const getArtists = name => {
    return dispatch => {
        dispatch(loadingArtists(true))
        dispatch(onSearch(name))
        spotifyApi
            .searchArtists(name.length > 0 ? name : ' ' , {limit:50})
            .then(response => {
                const artists = response.artists.items
                dispatch(loadingArtists(false))
                dispatch(setCurrentArtist(artists[0]))
                return dispatch(setArtists(artists))
            })
            .catch(e => console.log(e))
    }
}

export const getTracks = name => {
    return dispatch => {
        dispatch(onSearch(name))
        spotifyApi
            .searchTracks(name.length > 0 ? name : ' ' , {limit:50})
            .then(response => {
                console.log(response)
                return dispatch(setArtists(response.tracks.items))
            })
            .catch(e => console.log(e))
    }
}
