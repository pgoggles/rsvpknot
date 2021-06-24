import styled from 'styled-components';
import ColorPalette from '../Constants/Colors';

const Carousel = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GetStartedButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6%;
  height: 1%;
  background-color: ${ColorPalette.pink};
  border-radius: 5px;
`;

const styles = {
  Carousel,
  GetStartedButton,
};

export default styles;