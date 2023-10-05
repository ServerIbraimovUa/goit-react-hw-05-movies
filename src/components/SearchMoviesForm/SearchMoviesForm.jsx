import React, { useState } from 'react';

const SearchMoviesForm = ({ handleQuery }) => {
  const [search, setSearch] = useState('');

  const onSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleQuery(search);

    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearch}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMoviesForm;
