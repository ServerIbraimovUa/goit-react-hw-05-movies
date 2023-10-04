import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #b6c6bc;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  nav {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
  }

  ul {
    display: flex;
    gap: 24px;
    margin-left: 172px;

    li {
      padding: 24px 0;
    }
    a {
      color: #000;
      &:hover,
      &:focus,
      &:active {
        color: #ee0000;
      }
    }
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  span {
    font-size: 24px;
    text-transform: uppercase;
  }
`;
