import React, { Component } from 'react'
//import logo from "./logo.svg";
import { Input, Radio } from 'antd'
import { connect } from 'react-redux'
import {
    getArtists,
    onSearch,
    setSearchType,
    getTracks,
    search
} from '../../redux/actions/index'

const RadioGroup = Radio.Group
const SearchInput = Input.Search

const mapDispatchToProps = dispatch => {
    return {
        getArtists: e => dispatch(getArtists(e.target.value)),
        getTracks: e => dispatch(getTracks(e.target.value)),
        setSearchType: e => dispatch(setSearchType(e.target.value)),
        search: e => dispatch(search(e.target.value)),
    }
}

const mapStateToProps = state => {
    return {
        searchType: state.searchType,
        searchTerm: state.searchTerm
    }
}

class SearchContainer extends Component {
    render() {
        const { searchType, getArtists, setSearchType, getTracks , search , searchTerm} = this.props
        return (
            <div>
                <SearchInput
                    onChange={search}
                />
                <p style={{ color: '#fff' }}>
                    Showing results for: <span style={{marginLeft: '5px'}}>{searchTerm}</span>
                </p>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
