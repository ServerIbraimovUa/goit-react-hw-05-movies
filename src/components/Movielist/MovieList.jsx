import React from 'react';
import { Box, DetailWrrap, ImgWrrap, ListLink, Span } from './Movielist.styled';
import { Link } from 'react-router-dom';

const MovieList = ({ movie }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;
  return (
    <>
      <Box>
        <ImgWrrap>
          <img src={`${BASE_IMG}${poster_path}`} alt={title} />
          {vote_average && (
            <Span rating={vote_average}>{vote_average.toFixed(1)}</Span>
          )}
        </ImgWrrap>
        <DetailWrrap>
          <h2>{title}</h2>
          <p>Release data: {release_date}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </DetailWrrap>
        <ListLink>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListLink>
      </Box>
    </>
  );
};

export default MovieList;
