import e from "cors";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ displayName: "", email: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send request to API
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="displayName">Display Name: </label>
      <input name="displayName" type="text" onChange={handleChange} />
      <label htmlFor="email">Email: </label>
      <input name="email" type="text" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
