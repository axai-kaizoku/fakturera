import { ToggleLanguage } from "./toggle-language.jsx";

export const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: "3rem",
        padding: "0.3rem 0.6rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Header</h1>
      <ToggleLanguage />
    </header>
  );
};
