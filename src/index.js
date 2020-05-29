import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content name0 = {course.parts[0].name} exercises0 = {course.parts[0].exercises} name1 = {course.parts[1].name} exercises1 = {course.parts[1].exercises} name2 = {course.parts[2].name} exercises2 = {course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p> {props.name0} {props.exercises0} </p>
      <p> {props.name1} {props.exercises1} </p>
      <p> {props.name2} {props.exercises2} </p>
      <p> There are {props.exercises0 + props.exercises1 + props.exercises2} exercises in total </p>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))