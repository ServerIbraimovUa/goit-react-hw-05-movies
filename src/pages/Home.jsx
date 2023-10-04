import { Container } from 'components/App.styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <section>
      <Container>
        {loading && (
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default Home;
