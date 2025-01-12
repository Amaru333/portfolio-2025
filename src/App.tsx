import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";
import Medverse from "./pages/projects/Medverse";
import PayShare from "./pages/projects/PayShare";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/medverse" element={<Medverse />} />
            <Route path="/projects/payshare" element={<PayShare />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
