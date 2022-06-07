import React, { useState } from "react";
import dumy from "../components/data.json";
import Faq from "./Faq";
const Faqs = () => {
  const [datas, setDatas] = useState(dumy);

  return (
    <div>
      {datas.map((data) => (
        <Faq {...data}/>
      ))}
    </div>
  );
};

export default Faqs;
