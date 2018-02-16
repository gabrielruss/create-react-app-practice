import React from 'react';
import {connect} from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  onClickSave = () => {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
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

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);