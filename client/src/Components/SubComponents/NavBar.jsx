import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import NavBarStyles from '../../Styles/NavBar';
import ColorPalette from '../../Constants/Colors';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBarStyles.NavBar>
        <NavBarStyles.NavButton>
          <NavLink
            activeClassName="selected"
            exact to="/"
            activeStyle={{
              color: ColorPalette.lightpurple
            }}
            style={{
              color: 'white',
              textDecoration: 'none'
            }}>Home</NavLink>
        </NavBarStyles.NavButton>
        <NavBarStyles.NavButton>
          <NavLink
            activeClassName="selected"
            to="/create"
            activeStyle={{
              color: ColorPalette.lightpurple
            }}
            style={{
              color: 'white',
              textDecoration: 'none'
            }}>Host An Event</NavLink>
        </NavBarStyles.NavButton>
        <NavBarStyles.NavButton>
          <NavLink
            activeClassName="selected"
            to="/rsvp" activeStyle={{
              color: ColorPalette.lightpurple
            }}
            style={{
              color: 'white',
              textDecoration: 'none'
            }}>RSVP</NavLink>
        </NavBarStyles.NavButton>
        <NavBarStyles.NavButton>
          <NavLink
            activeClassName="selected"
            to="/account"
            activeStyle={{
              color: ColorPalette.lightpurple
            }}
            style={{
              color: 'white',
              textDecoration: 'none'
            }}>My Account</NavLink>
        </NavBarStyles.NavButton>
      </NavBarStyles.NavBar>
    );
  }
}

export default NavBar;