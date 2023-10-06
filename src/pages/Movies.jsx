import { Container } from 'components/App.styled';
import Loading from 'components/Loading/Loading';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryText, setQueryText] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const queryParam = queryText.get('query') ?? '';

  useEffect(() => {
    if (!queryParam) return setMovies([]);
    const searchMovie = async query => {
      setLoading(true);
      try {
        const { results } = await getSearchMovies(query);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovie(queryParam);
  }, [queryParam]);

  const handleQuery = query => {
    console.log(query);
    setQueryText(query);
  };

  return (
    <section>
      <Container>
        <SearchMoviesForm handleQuery={handleQuery} queryParam={queryParam} />
        {loading ? (
          <Loading />
        ) : (
          <>
            {movies.length !== 0 && <h2>Movies: '{queryParam}'</h2>}
            <SearchMoviesList movies={movies} />
          </>
        )}
      </Container>
    </section>
  );
};

export default Movies;
