import React, { Component } from 'react'
//import logo from "./logo.svg";
import { Input, Radio } from 'antd'
import { connect } from 'react-redux'
import {
    getArtists,
    onSearch,
    setSearchType,
    getTracks,
} from '../../redux/actions/index'

const RadioGroup = Radio.Group
const SearchInput = Input.Search

const mapDispatchToProps = dispatch => {
    return {
        getArtists: e => dispatch(getArtists(e.target.value)),
        getTracks: e => dispatch(getTracks(e.target.value)),
        setSearchType: e => dispatch(setSearchType(e.target.value)),
    }
}

const mapStateToProps = state => {
    return {
        searchType: state.searchType,
    }
}

class SearchContainer extends Component {
    render() {
        const { searchType, getArtists, setSearchType, getTracks } = this.props
        return (
            <div>
                <SearchInput
                    onChange={searchType === 'artist' ? getArtists : getTracks}
                />
                <RadioGroup value={searchType} onChange={setSearchType}>
                    <Radio value="artist">by Artist</Radio>
                    <Radio value="song">by Song</Radio>
                </RadioGroup>
                <p style={{ color: '#fff' }}>
                    Showing results for:{this.props.searchTerm}
                </p>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
