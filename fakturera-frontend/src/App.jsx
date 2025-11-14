import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./components/header";
import { LanguageProvider } from "./contexts/language-context";

function App() {
  return (
    <LanguageProvider>
      <main style={{ height: "100dvh", width: "100%", display: "flex", flexDirection: "column" }}>
        <Header />
        <ScrollRestoration />
        <Outlet />
      </main>
    </LanguageProvider>
  );
}

export default App;
