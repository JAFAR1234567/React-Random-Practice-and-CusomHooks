import React, { useState } from "react";

const ToogleComponent = () => {
  const [value, setValue] = useState(false);
  return (
    <div style={{ margin: "200px" }}>
      <p>{value.toString()}</p>
      <button onClick={() => setValue(!value)}>Toggle</button>
    </div>
  );
};

export default ToogleComponent;
