import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Component3 = () => {
  const {data,title} = useContext(UserContext);
  const {name,age} = data;
  const {podobi,marks} = title;
  return (
    <div>
      Component3
      {name}
      {age}
      {podobi}
      {marks}
    </div>
  );
};

export default Component3;
