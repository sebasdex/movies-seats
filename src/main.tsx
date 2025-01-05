import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import Layout from "./Layout";
import Seats from "./components/Seats";
import { TheaterProvider } from "./context/TheaterProvider";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <TheaterProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/seats/:slugId" element={<Seats />} />
        </Route>
      </Routes>
    </TheaterProvider>
  </BrowserRouter>
);