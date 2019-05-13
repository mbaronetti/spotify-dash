//ACTIONS
import {
    SHOW_MODAL,
    SEARCH_TERM,
    SET_ARTISTS,
    SET_NOW_PLAYING,
    LOADING_ARTISTS,
    SET_CURRENT_ARTIST,
    SET_TOP_ARTISTS,
    SEARCH_TYPE,
    SET_TRACKS,
    SET_NEW_RELEASES,
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
export const setTracks = data => {
    return {
        type: SET_TRACKS,
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
    return {
        type: SEARCH_TYPE,
        data,
    }
}
export const setNewReleases = data => {
    return {
        type: SET_NEW_RELEASES,
        data,
    }
}

export const getNowPlaying = () => {
    return dispatch => {
        spotifyApi.getMyCurrentPlayingTrack().then(data => {
            return dispatch(setNowPlaying(data.item))
        })
    }
}
export const getNewReleases = () => {
    return dispatch => {
        spotifyApi
            .getNewReleases({ limit: 10 })
            .then(data => {
                return dispatch(setNewReleases(data.albums))
            })
            .catch(e => console.log(e))
    }
}

export const getArtists = name => {
    return dispatch => {
        dispatch(loadingArtists(true))
        dispatch(onSearch(name))
        spotifyApi
            .searchArtists(name.length > 0 ? name : ' ', { limit: 50 })
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
            .searchTracks(name.length > 0 ? name : ' ', { limit: 50 })
            .then(response => {
                return dispatch(setTracks(response.tracks.items))
            })
            .catch(e => console.log(e))
    }
}

export const search = name => {
    return dispatch => {
        dispatch(getArtists(name))
        dispatch(getTracks(name))
    }
}
