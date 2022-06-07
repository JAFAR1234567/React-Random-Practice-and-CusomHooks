import React, { useState } from "react";
import style from "./Event.module.css";
const Event = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
 
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2>Registration</h2>
        <div className={style.formGroup}>
          <label htmlFor="">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={name}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={email}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={password}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
};

export default Event;
