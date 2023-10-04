import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/movies-api';
import { Container, Section } from 'components/App.styled';
import CastList from './CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { cast } = await getCastMovie(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };

    fetchData(movieId);
  }, [movieId]);
  return (
    <Section>
      <Container>{loading && <CastList cast={cast} />}</Container>
    </Section>
  );
};

export default Cast;
