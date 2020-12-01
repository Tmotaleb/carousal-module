import styled, {css} from 'styled-components';

export const mainContainer = styled.div`
  display: grid;
  border: 2px solid black;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px 500px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  grid-gap: 15px;
  justify-content: space-between;
`;

export const navContainer = styled.div`
  grid-row: 1;
  border: 2px solid black;
  width: 100%;
  height: 100%;
`;

export const title = styled.div`
  grid-row: 2;
  border: 2px solid black;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

export const carousalContainer = styled.div`
  grid-row: 3;
  /* border: 2px solid black; */
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 500px;
  grid-gap: 10px
`;

export const bigImageBlock = styled.div`
  grid-column:1
`;

export const bigImage = styled.img`
  width: 100%;
  height: 500px;
`;

export const sideImageBlock = styled.div`
  grid-column: 2;
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 245px 245px;
  grid-gap: 10px
`;

export const firstPicBlock = styled.div`
  grid-row: 1;
  /* border: 2px solid black; */
`;

export const firstImage = styled.img`
  width: 100%;
  height: 245px;
`;

export const secondPicBlock = styled.div`
  grid-row: 2;
  /* border: 2px solid black; */
  /* display: inline-block;
  position: relative; */
`;

export const btnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const btnButton = styled.button`
  position: absolute;
  /* top:50%;
  left: 50%; */
  bottom: -5px;
  right: -40px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: whitesmoke;
  color: black;
  opacity: 0.6;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.4s;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

export const secondImage = styled.img`
  width: 100%;
  height: 245px;
`;
