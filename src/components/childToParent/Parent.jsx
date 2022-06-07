import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
//   let [title, setTitle] = useState({
//     firstTitle: "java",
//     secondTitle: "script",
//   });
//   const handleData = () => {
//       const colonedTitle = {
//           ...title
//       }
//       colonedTitle.firstTitle = 'React';
//       colonedTitle.secondTitle = 'js'
//     setTitle(colonedTitle)
//   };
  return (
    <div>
      <h1>This is parent component</h1>
      {/* {title.firstTitle} {title.secondTitle} */}
      {/* <Child data={data} /> */}
    </div>
  );
}
