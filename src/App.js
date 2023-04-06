import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Upload from "./components/Upload";
import Videos from "./components/Videos";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp  />} />
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
