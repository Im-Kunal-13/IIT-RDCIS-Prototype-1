import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./Pages/Authentication/Authentication";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Administration from "./Pages/Dashboard/sub-components/Administration";
import AdminList from "./Pages/Dashboard/sub-components/AdminList";
import Configuration from "./Pages/Dashboard/sub-components/Configuration";
import Monitoring from "./Pages/Dashboard/sub-components/Monitoring";
import RegisterAdmin from "./Pages/Dashboard/sub-components/RegisterAdmin";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ThemeState from "./context/theme/ThemeState";

function App() {
  return (
    <>
      <ThemeState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="dashboard/*" element={<Dashboard />}>
              <Route path="monitoring/*" element={<Monitoring />} />
              <Route path="configuration/*" element={<Configuration />} />
              <Route path="administration/*" element={<Administration />}>
                <Route path="adminList/*" element={<AdminList />} />
                <Route path="register/*" element={<RegisterAdmin />} />
              </Route>
            </Route>
            <Route path="register" element={<></>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={2000} />
      </ThemeState>
    </>
  );
}

export default App;
