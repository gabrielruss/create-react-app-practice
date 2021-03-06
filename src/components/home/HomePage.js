import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Pluralsight Administrator</h1>
        <p>React, Redux, and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </Jumbotron>
    );
  }
}

export default HomePage;