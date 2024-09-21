import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box} from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/index";
import OrderList from "./pages/orderlist/index";
import PageUnder from "./pages/Projects";
import PageUnder2 from "./pages/social";
import PageUnder3 from "./pages/onlinecourses";
import PageUnder1 from "./pages/userprofile";
import PageUnder5 from "./pages/blog";
import PageUnder4 from "./pages/corporate";
import PageUnder6 from "./pages/account";

function App() {
  const[theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
    <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
              <Route path="/eCommerce" element={<Dashboard />} />
              <Route path="/Default" element={<OrderList />} />
              <Route path="/projects" element={<PageUnder />} />
              <Route path="/Courses" element={<PageUnder3 />} />
              <Route path="/User" element={<PageUnder1 />} />
              <Route path="/Account" element={<PageUnder6 />} />
              <Route path="/Corporate" element={<PageUnder4 />} />
              <Route path="/Blog" element={<PageUnder5 />} />
              <Route path="/Social" element={<PageUnder2 />} />
            </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
