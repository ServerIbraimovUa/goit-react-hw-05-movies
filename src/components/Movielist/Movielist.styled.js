import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 24px;
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
  border: 4px solid
    ${({ rating }) => {
      if (rating <= 5) {
        return 'red';
      } else if (rating < 7) {
        return 'orange';
      }
      return 'green';
    }};
`;

export const DetailWrrap = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 30px;
  }
  h4 {
    margin-bottom: 10px;
  }
`;

export const ListLink = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  li {
  }
  a {
    background: #fff;
    border-radius: 20px;
    display: block;
    text-decoration: none;
    padding: 10px 20px;
    color: inherit;
    &:hover,
    &:focus {
      background: #ee0000;
      color: #fff;
    }
  }
`;
