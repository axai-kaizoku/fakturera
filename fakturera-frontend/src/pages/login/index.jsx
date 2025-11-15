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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await login(email, password);

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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">{t("login.email")}</label>
            <input
              type="email"
              autoComplete="username"
              ref={emailRef}
              id="email"
              name="email"
              placeholder={t("login.emailAddress")}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="password">{t("login.password")}</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              ref={passwordRef}
              placeholder={t("login.password")}
              required
            />
          </div>
          {error ? <p style={{ color: "red", opacity: "50%" }}>{t("login.error")}</p> : null}
          <button type="submit">{t("login.title")}</button>
        </form>

        <button>{t("login.register")}</button>
        <button>{t("login.forgottenPassword")}</button>
      </div>
    </div>
  );
};

export default Login;
