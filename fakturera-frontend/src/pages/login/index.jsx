import { useRef } from "react";
import { Input } from "../../components/input.jsx";
import { login } from "../../api/auth.js";
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await login(email, password);

    console.log(res);

    // need to save this in localStorage
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Input type="email" ref={emailRef} placeholder="email" required />
        <Input type="password" ref={passwordRef} placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
