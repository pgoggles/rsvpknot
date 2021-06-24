import React from 'react';
import NavBarStyles from '../../Styles/NavBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBarStyles.NavBar>
        <NavBarStyles.NavButton>Host An Event</NavBarStyles.NavButton>
        <NavBarStyles.NavButton>RSVP</NavBarStyles.NavButton>
        <NavBarStyles.NavButton>My Account</NavBarStyles.NavButton>
      </NavBarStyles.NavBar>
    );
  }
}

export default NavBar;