import { Outlet, ScrollRestoration } from "react-router";
import "./App.css";

function App() {
  return (
    <main>
      <ScrollRestoration />
      <Outlet />
    </main>
  );
}

export default App;
