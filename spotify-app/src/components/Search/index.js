import React, { Component } from 'react'
//import logo from "./logo.svg";
import { Input } from 'antd';
import { connect } from 'react-redux'
import { getArtists , onSearch } from '../../redux/actions/index'

const SearchInput = Input.Search;

const mapDispatchToProps = dispatch => {
  return {
    onSearch: e => dispatch(getArtists(e.target.value))
  }
}

const mapStateToProps = state => {
  return{
    searchTerm: state.searchTerm
  }
}

class Search extends Component {
    render() {
        return (
            <div>
              <SearchInput onChange={this.props.onSearch}/>
              <p>Showing results for:{this.props.searchTerm}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Search);
