import Content2 from "./content2";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";


/* 
    OSAN 1 MÄÄRITTELYT
  const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <>
    <div>
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>

    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>

    <div>
      <Content2 part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
    </>
  )
}
*/



/* OSAN 2 MÄÄRITTELYT 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <>
    <div>
        <h1>{course}</h1>
        <p>
          {part1.name} {part1.exercises}
        </p>
        <p>
          {part2.name} {part2.exercises}
        </p>
        <p>
          {part3.name} {part3.exercises}
        </p>
        <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>

    <div>
      <Header course={course} />
      <Content p1={part1.name} p2={part2.name} p3={part3.name} />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>

    <div>
      <Content2 part1={part1} part2={part2} part3={part3} />
    </div>

    </>
  )
}
*/



/* OSAN 3 MÄÄRITTELYT 

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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
    ];

  return (
    <>
    <div>
        <h1>{course}</h1>
        <p>
          {parts[0].name} {parts[0].exercises}
        </p>
        <p>
          {parts[1].name} {parts[1].exercises}
        </p>
        <p>
          {parts[2].name} {parts[2].exercises}
        </p>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>

    <div>
      <Header course={course} />
      <Content p1={parts[0].name} p2={parts[1].name} p3={parts[2].name} />
      <Total e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises} />
    </div>

    <div>
      <Content2 part1={parts[0]} part2={parts[1]} part3={parts[2]} />
    </div>

    </>
  )
}
  */




/* OSAN 4 MÄÄRITTELYT */ 

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
  <>
  <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  </div>

  <div>
    <Header course={course} />
    <Content p1={course.parts[0].name} p2={course.parts[1].name} p3={course.parts[2].name} />
    <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises} />
  </div>

  <div>
    <Content2 part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />
  </div>

  </>
)
}

export default App