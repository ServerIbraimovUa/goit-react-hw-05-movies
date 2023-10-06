import { Link, useLocation } from 'react-router-dom';
import { ListHome } from './HomeList.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const HomeList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListHome>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <img src={`${BASE_IMG}${poster_path}`} alt={title} />
            {title && title.substring(0, 20)}
          </Link>
        </li>
      ))}
    </ListHome>
  );
};

export default HomeList;
