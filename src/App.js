import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutComponent from "./components/AboutComponent";
import ContainComponents from "./components/ContainComponents";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<ContainComponents />} />
          <Route path="/home" element={<ContainComponents />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
