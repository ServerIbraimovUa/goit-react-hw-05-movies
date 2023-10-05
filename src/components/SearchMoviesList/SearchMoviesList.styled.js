import styled from 'styled-components';

export const ListSearch = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 18px;

  li {
    font-size: 22px;
    &:hover {
      scale: 1.1;
      color: red;
    }
  }
  a {
    display: block;
    text-decoration: none;
    color: #000;
  }
  img {
    border: 1px solid #eee;
    width: 200px;
    height: 300px;
  }
`;
