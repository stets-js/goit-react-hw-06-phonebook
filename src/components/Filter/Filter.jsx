import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        return (
            <input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.filterChange}
        />
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,
}


export default Filter;