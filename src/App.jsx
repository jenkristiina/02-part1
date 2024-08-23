import Content2 from "./content2";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";



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

export default App