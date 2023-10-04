import { Item, List } from './CastList.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const CastList = ({ cast }) => {
  return (
    <List>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            <img src={`${BASE_IMG}${profile_path}`} alt={character} />
            <h2>{name}</h2>
            <p>{character}</p>
          </Item>
        ))}
    </List>
  );
};

export default CastList;
