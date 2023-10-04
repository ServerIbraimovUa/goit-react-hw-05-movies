import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-size: 20px;

  ul {
    display: flex;
    gap: 10px;
  }
`;

export const ImgWrrap = styled.div`
  position: relative;
  border: 1px solid #eee;
`;
export const Span = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid;
  /* ${({ rating }) => {
    if (rating <= 5) {
      return 'red';
    } else if (rating < 7) {
      return 'orange';
    }
    return 'green';
  }}; */
`;

export const ListLink = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  a {
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 10px 20px;
    border-radius: 20px;
  }
`;
