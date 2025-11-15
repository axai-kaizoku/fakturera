import { DIAMOND } from "../consts/index.js";
import { useLanguage } from "../hooks/use-language.jsx";
import { ToggleLanguage } from "./toggle-language.jsx";

export const Header = () => {
  const { t } = useLanguage();
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
      <a href="/">
        <img src={DIAMOND} alt="logo" width={40} height={25} />
      </a>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <li>
            <a href="/">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#">{t("nav.order")}</a>
          </li>
          <li>
            <a href="#">{t("nav.ourCustomers")}</a>
          </li>
          <li>
            <a href="#">{t("nav.aboutUs")}</a>
          </li>
          <li>
            <a href="#">{t("nav.contactUs")}</a>
          </li>
          <li>
            <ToggleLanguage />
          </li>
        </ul>
      </nav>
    </header>
  );
};
