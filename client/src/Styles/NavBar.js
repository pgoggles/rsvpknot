import styled from 'styled-components';
import ColorPalette from '../Constants/Colors';

const NavBar = styled.div `
  width: 100%;
  height: 80px;
  background-color: ${ColorPalette.pink};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  `;

const NavButton = styled.div `
  padding: 0.3%;
  border-radius: 5px;
  border-color: white;
  border-style: solid;
  &:hover {
    border-color: ${ColorPalette.lightred};
    color: ${ColorPalette.lightred};
    cursor: pointer;
  }
`;

const styles = {
  NavBar,
  NavButton
};

export default styles;