import React, { useState } from "react";
import Component3 from "./Component3";
import { UserContext } from "./UserContext";
const Component1 = () => {
  const [data] = useState({ name: "abu jafar", age: 26 });
  const [title] = useState({ podobi: "bolod", marks: 100 });
  return (
    <UserContext.Provider value={{ data, title }}>
      <Component3 />
    </UserContext.Provider>
  );
};

export default Component1;
