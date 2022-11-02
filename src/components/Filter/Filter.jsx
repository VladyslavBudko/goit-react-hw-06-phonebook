import React from 'react';
import PropTypes from 'prop-types';
import {FilterSection} from './Filter.styled'


const Filter = ({ value, onChange }) => (
<>
<FilterSection htmlFor="">Find contacts by name
<input type="text" value={value} onChange={onChange} />
</FilterSection>
</>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};