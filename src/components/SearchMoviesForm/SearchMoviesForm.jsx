import { Label } from './SearchMoviesForm.styled';

const SearchMoviesForm = ({ handleQuery, queryParam }) => {
  const onSearch = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    handleQuery(nextParams);
  };

  return (
    <Label>
      <input
        type="text"
        placeholder="Search"
        value={queryParam}
        onChange={onSearch}
      />
    </Label>
  );
};

export default SearchMoviesForm;
