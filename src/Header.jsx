import React from "react";


/* OSAíen 1-3 MÄÄRITTELLYT
const Header = ({course.name}) => {
    console.log(course.name)
    return (
      <div>
        {course.name}
      </div>
    )
  }
*/

/* OSAN 4 MÄÄRITTELY */ 

const Header = ({course}) => {
  const {name} = course;
  console.log(name)
  return (
    <div>
      {name}
    </div>
  )
}

  export default Header