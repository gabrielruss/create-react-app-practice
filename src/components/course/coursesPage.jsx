import React from 'react';
import { Input, Button } from 'semantic-ui-react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  onClickSave = () => {
    alert(`Saving ${this.state.course.title}`);
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>

        <Input
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <Button
          primary
          onClick={this.onClickSave}>Save</Button>
      </div>
    );
  }
}

export default CoursesPage;