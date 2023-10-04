import { Item, List } from './CastList.styled';

const CastList = ({ cast }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';
  return (
    <List>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            {profile_path ? (
              <img src={`${BASE_IMG}${profile_path}`} alt={character} />
            ) : (
              <img src={'Заглушка'} alt={character} />
            )}
            <h2>{name}</h2>
            <p>{character}</p>
          </Item>
        ))}
    </List>
  );
};

export default CastList;
