import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import { DeviceInfo } from "./types/device-info";
import axios from "axios";
import { Status } from "./types/status";

function App() {
  const [devicesInfo, setDevicesInfo] = useState<DeviceInfo[]>([]);
  const [devicesInfoStatus, setDevicesInfoStatus] = useState<Status>("idle");

  useEffect(() => {
    if (devicesInfoStatus === "idle") {
      setDevicesInfoStatus("loading");
      axios.get(import.meta.env.VITE_API_URL + "/device").then((response) => {
        if (response.status === 200) {
          setDevicesInfo(response.data as DeviceInfo[]);
          setDevicesInfoStatus("succeeded");
        } else {
          console.error(
            "something went wrong... can not get devices data!",
            response
          );
          setDevicesInfoStatus("failed");
        }
      });
    }
  }, [devicesInfoStatus]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={MainLayout()}>
          <Route index element={Home({ devicesInfo, devicesInfoStatus })} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
