import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
// import { Container } from 'components/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Logo</NavLink>
          <ul>
            <li>
              <NavLink to="/">Nome</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
