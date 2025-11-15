import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./components/header";
import { LanguageProvider } from "./contexts/language-context";
import { AuthProvider } from "./contexts/auth-context";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <main style={{ height: "100dvh", width: "100%", display: "flex", flexDirection: "column" }}>
          <Header />
          <ScrollRestoration />
          <Outlet />
        </main>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
