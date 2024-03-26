// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx"
import Sidebar from "./components/Sidebar.jsx";
import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import Tracking from "./components/Tracking.jsx";
import Transaction from "./components/Transaction.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Tracking" element={<Tracking />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
