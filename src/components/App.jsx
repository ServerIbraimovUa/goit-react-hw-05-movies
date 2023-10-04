import Home from 'pages/Home';
import Movies from 'pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>rew</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;