import { useRef } from "react";
import { login } from "../../api/auth.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../hooks/use-language.jsx";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { t } = useLanguage();

  // console.log(t);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await login(email, password);

    console.log(res);
    if (res.error) {
      setError(res.data);
      return;
    }
    // need to save this in localStorage

    navigate("/");
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "30rem",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1>{t("login.title", "")}</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="email" ref={emailRef} placeholder="email" required />
          <input type="password" ref={passwordRef} placeholder="password" required />
          {error ? <p style={{ color: "red", opacity: "50%" }}>{error}</p> : null}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
