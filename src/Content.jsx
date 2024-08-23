import React from "react";

const Content = ({p1, p2, p3}) => {
    console.log(p1, p2, p3)
    return (
      <div>
        <p>{p1}, {p2}, {p3}</p>
      </div>
    )
  }

  export default Content