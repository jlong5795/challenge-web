import { useState } from "react";
import { useAppDispatch } from "../../store/reduxHooks"
import { useRouter } from 'next/router';
import { login } from '../../store/slices/userSlice';

const Login = () => {
  const [form, setForm] = useState({ displayName: "", email: "" });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // send request to API
    dispatch(login(form))
    router.push('/room')
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
