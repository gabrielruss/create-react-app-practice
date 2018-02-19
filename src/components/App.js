import React from 'react';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import { Switch, Route } from 'react-router-dom';
import CoursesPage from './course/CoursesPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/courses' component={CoursesPage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;