import React from "react";

/* OSA 1
const Part = ({p, e}) => {
    console.log(p, e)
    return (
      <div>
        <p>{p}, {e}</p>
      </div>
    )
  }
*/

const Part = ({p}) => {
  console.log(p)
  return (
    <div>
      <p>{p.name} {p.exercises}</p>
    </div>
  )
}

  export default Part