import React from "react";
import Part from "./Part";

const Content2 = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
    return (
      <div>
        <Part p={part1} e={exercises1} />
        <Part p={part2} e={exercises2} />
        <Part p={part3} e={exercises3} />
      </div>
    )
  }

  export default Content2