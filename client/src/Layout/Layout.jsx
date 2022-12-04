import { Outlet } from "react-router-dom";

import Navbar from "../component/navBar/Navbar";
import RightBar from "../component/rightBar/RightBar";
import LeftBar from "../component/leftBar/LeftBar";
import "../style.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
const queryClient = new QueryClient();


const Layout = () => {
  
const { darkMode } = useContext(DarkModeContext);

  return (
    <QueryClientProvider client={queryClient}  >
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
