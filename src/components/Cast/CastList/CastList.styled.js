import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 46px;

  gap: 14px;
`;

export const Item = styled.li`
  /* width: calc((100% - 14px * 4) / 5); */
  width: 200px;
  min-height: 410px;
  text-align: center;

  img {
    border: 1px solid #eee;
    width: 200px;
    height: 300px;
  }
  h2 {
    margin-bottom: 8px;
  }
  p {
    font-size: 18px;
  }
`;
