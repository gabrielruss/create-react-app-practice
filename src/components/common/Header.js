import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';


const Header = () => (
  <Router>
    <div>
      <nav>
        <Link to="/" activeClassName="active">Home</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
      </nav>

      <Route exact path="/" component={HomePage} />
      <Route path="about" component={AboutPage} />

    </div>
  </Router>
);

export default Header;