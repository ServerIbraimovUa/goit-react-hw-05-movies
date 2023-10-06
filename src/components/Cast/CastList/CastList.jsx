import { Item, List } from './CastList.styled';

const CastList = ({ cast }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';
  const set = new Set();
  return (
    <List>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => {
          if (!set.has(id)) {
            set.add(id);
            console.log(set);
            return (
              <Item key={id}>
                {profile_path ? (
                  <img src={`${BASE_IMG}${profile_path}`} alt={character} />
                ) : (
                  <img src={'Заглушка'} alt={character} />
                )}
                <h2>{name}</h2>
                <p>{character}</p>
              </Item>
            );
          } else {
            return null;
          }
        })}
    </List>
  );
};

export default CastList;
