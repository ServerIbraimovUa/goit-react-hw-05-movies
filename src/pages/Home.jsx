import { Container, Section } from 'components/App.styled';
import HomeList from 'components/HomeList/HomeList';
import Loading from 'components/Loading/Loading';
import { useEffect, useState } from 'react';

import { getMovies } from 'services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const details = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };

    details();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Popular movies of the day! </h1>
        {loading ? <HomeList movies={movies} /> : <Loading />}
      </Container>
    </Section>
  );
};

export default Home;
