import React, { useState } from "react";

const Faq = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <article style={{ display: "flex" }}>
        <h1>{title}</h1>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </article>
      <p>{toggle && desc}</p>
    </div>
  );
};

export default Faq;
