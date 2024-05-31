import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchList({ defaultSearchKeyword, onSearchKeywordChange }) {
  const [searchKeyword, setSearchKeyword] = useState(defaultSearchKeyword || '');

  function handleChange(event) {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    onSearchKeywordChange(keyword);
  }

  return (
    <div className='search-bar'>
      <div className='search-bar__input'>
        <input
          type='text'
          placeholder='Cari berdasarkan judul...'
          value={searchKeyword}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

SearchList.propTypes = {
  defaultSearchKeyword: PropTypes.string,
  onSearchKeywordChange: PropTypes.func.isRequired
};

export default SearchList;
