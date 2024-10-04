import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./Components/Country";
import Details from "./Components/Details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country/:name" element={<Details />} />
      </Routes>
    </Router>
  );
}
