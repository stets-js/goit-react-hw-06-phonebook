import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

class Filter extends Component {
    render() {
        return (
            <>
            <p className={css.title}>Find contacts by name</p>
                <input
                    className={css.input}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.filterChange}
                />
            </>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,
}


export default Filter;