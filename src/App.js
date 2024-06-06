import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./components/LogIn";
import AppLayout from "./components/AppLayout";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="services" Component={Services} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
