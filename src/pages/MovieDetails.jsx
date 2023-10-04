import { Container, Section } from 'components/App.styled';
import MovieList from 'components/Movielist/MovieList';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoveDetails } from 'services/movies-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  // useEffect(() => {
  //   console.log(movieId);
  //   const detail = async id => {
  //     try {
  //       const response = await getMoveDetails(id);
  //       console.log(response);
  //       setMovie(response);
  //       setLoading(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   detail(movieId);

  //   return () => {
  //     detail(movieId);
  //   };
  // }, [movieId]);
  useEffect(() => {
    getMoveDetails(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(console.log)
      .finally(() => setLoading(true));
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>{loading && <MovieList movie={movie} />}</Container>
      </Section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
