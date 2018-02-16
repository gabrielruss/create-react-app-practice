import React from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
      </div>
    );
  }
}

export default CoursesPage;