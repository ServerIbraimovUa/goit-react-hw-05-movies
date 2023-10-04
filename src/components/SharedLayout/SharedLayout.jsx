import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, LinkStyle } from './Layout.styled';
import { Container } from 'components/App.styled';
// import { Container } from 'components/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <LinkStyle to="/">
              <span>M</span>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/film-reel.png"
                alt="film-reel"
              />
              <span>vie</span>
            </LinkStyle>
            <ul>
              <li>
                <NavLink to="/">Nome</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
