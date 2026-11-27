import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import LiveApps from "./LiveApps";
import { profile } from "./data";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/live-apps" element={<LiveApps />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <footer className="foot">
          © {new Date().getFullYear()} {profile.name} · Built with React
        </footer>
      </main>
    </div>
  );
}
