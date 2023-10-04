import styled from 'styled-components';

export const ListHome = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;

  li {
    width: 200px;
    font-size: 22px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
