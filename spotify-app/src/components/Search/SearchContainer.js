import React, { Component } from 'react'
//import logo from "./logo.svg";
import { Input } from 'antd'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import { getArtists, getTracks, search } from '../../redux/actions/index'

const SearchInput = Input.Search

const mapDispatchToProps = dispatch => {
    return {
        getArtists: value => dispatch(getArtists(value)),
        getTracks: value => dispatch(getTracks(value)),
        search: value => dispatch(search(value)),
    }
}

const mapStateToProps = state => {
    return {
        searchType: state.searchType,
        searchTerm: state.searchTerm,
    }
}

class SearchContainer extends Component {
    componentDidMount() {
        this.searchResuts = debounce(this.searchResuts, 500)
    }
    handleSearch = e => {
      const value = e.target.value;
        this.props.search(value)
        this.searchResuts(value)
    }

    searchResuts = text => {
        const { searchTerm } = this.props
        this.props.getArtists(searchTerm)
        this.props.getTracks(searchTerm)
    }
    render() {
        const { search, searchTerm } = this.props
        return (
            <div className="search-container">
                <SearchInput size="small" onChange={this.handleSearch} />
                <p style={{ color: '#aaa' }}>
                    {searchTerm.length > 0 ? (
                        <span>
                            Showing results for:
                            <span style={{ marginLeft: '5px' }}>
                                {searchTerm}
                            </span>
                        </span>
                    ) : (
                        <span>Search by artist or song name</span>
                    )}
                </p>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
