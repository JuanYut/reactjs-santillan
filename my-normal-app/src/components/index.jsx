import React, { Component, PropTypes } from 'react'
import uid from 'uid'
import { courses } from '../data/courses'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'
import './index.css'

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      courses: []
    }

    // bindeo
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)

  }

  handleOnAddCourse(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      course = {
        id: form.id.value,
        name: (form.name.value) ? form.name.value : App.defaultProps.name,
        teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })
    form.reset()
  }

  render() {
    return(
      <div>
        <CourseAddForm onAddCourse={this.handleOnAddCourse} />
        <CoursesList courses = {this.state.courses} />
      </div>
    )
  }
}

App.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // teacher: PropTypes.string.isRequired
}
App.defaultProps = {
  id: uid(10),
  name: 'Curso Desconocido',
  teacher: 'Profesor No Asignado'
}

export default App