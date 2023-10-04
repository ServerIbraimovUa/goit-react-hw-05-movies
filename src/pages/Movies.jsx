import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <section>
      <Container>
        <h1>Movies</h1>
        <Link to={'111'}>move</Link>
      </Container>
    </section>
  );
};

export default Movies;
