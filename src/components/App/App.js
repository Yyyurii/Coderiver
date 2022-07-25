import "./App.scss";
import Layout from "../pages/Layout";
import Users from '../Users';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
