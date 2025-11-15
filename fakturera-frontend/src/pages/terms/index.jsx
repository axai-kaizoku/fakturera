import { useLanguage } from "../../hooks/use-language";

const Terms = () => {
  const { t } = useLanguage();

  const data = [];

  for (let i = 1; i <= 25; i++) {
    data.push({
      id: i,
      point: t(`terms.point${i}`),
    });
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          margin: "1rem 0 0",
          textAlign: "center",
          width: "50%",
        }}
      >
        <h1>{t("terms.title")}</h1>
        <button style={{ width: "fit-content", margin: "1rem auto 2rem auto" }}>
          <a href="/">{t("terms.closeAndGoBack")}</a>
        </button>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.4rem",
            padding: "0 0 1.5rem 0",
          }}
        >
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.point}</p>
            </li>
          ))}
        </ul>
        <button style={{ width: "fit-content", margin: "0 auto 2rem auto" }}>
          <a href="/">{t("terms.closeAndGoBack")}</a>
        </button>
      </div>
    </div>
  );
};

export default Terms;
