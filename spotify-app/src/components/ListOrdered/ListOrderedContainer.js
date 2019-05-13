import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListOrderedComponent } from './ListOrderedComponent'
import { getNewReleases } from '../../redux/actions/index'

const mapStateToProps = state => {
    return {
        releases: state.releases,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getNewReleases: () => dispatch(getNewReleases()),
    }
}

class ListOrderedContainer extends Component {
    componentDidMount() {
        setTimeout(() => this.props.getNewReleases(), 1500)
    }
    render() {
        const { releases } = this.props
        let items = []
        if (releases) items = releases.items
        if (releases)
            return (
                <ListOrderedComponent title="Latest releases" items={items} />
            )
        return null
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOrderedContainer)
