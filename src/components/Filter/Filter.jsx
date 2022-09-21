import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter= ({filter, filterChange})=> {

return (
    <>
    <p className={css.title}>Find contacts by name</p>
        <input
            className={css.input}
    type="text"
    name="filter"
    value={filter}
    onChange={filterChange}
        />
    </>
);

}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,
}


export default Filter;