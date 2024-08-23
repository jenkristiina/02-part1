import React from "react";

const Part = ({p, e}) => {
    console.log(p, e)
    return (
      <div>
        <p>{p}, {e}</p>
      </div>
    )
  }

  export default Part