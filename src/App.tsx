import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import Reports from "./pages/reports";
import { useEffect, useState } from "react";
import { DeviceData } from "./types/device-data";
import generateDevicesData from "./utils/generate-devices-data";

function App() {
  const [devicesData, setDevicesData] = useState<DeviceData[]>([]);

  useEffect(() => {
    setDevicesData(generateDevicesData());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={MainLayout()}>
          <Route index element={Home({ devicesData })} />
          <Route path="reports" element={Reports({ devicesData })} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
