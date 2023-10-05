import styled from 'styled-components';

export const ListHome = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;

  li {
    width: 200px;
    font-size: 22px;
    &:hover {
      scale: 1.1;
      color: red;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
