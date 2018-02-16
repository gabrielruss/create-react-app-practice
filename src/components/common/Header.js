import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const Header = () => (
  <Menu>
    <Menu.Item key="home">
      <NavLink to="/" activeClassName="active">Home</NavLink>
    </Menu.Item>
    <Menu.Item key="courses">
      <NavLink to="/courses" activeClassName="active">Courses</NavLink>
    </Menu.Item>
    <Menu.Item key="about">
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </Menu.Item>
  </Menu>
);

export default Header;