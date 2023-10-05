import { Container, Section } from 'components/App.styled';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryText, setQueryText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!queryText) return;
    const searchMovie = async query => {
      const { results } = await getSearchMovies(query);
      setLoading(true);
      setMovies(results);
    };

    searchMovie(queryText);
  }, [queryText]);

  const handleQuery = query => {
    setQueryText(query);
  };

  return (
    <Section>
      <Container>
        <SearchMoviesForm handleQuery={handleQuery} />
        {loading && (
          <>
            <h2>Movies: '{queryText}'</h2>
            <SearchMoviesList movies={movies} />
          </>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
