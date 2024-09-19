import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/index";
import OrderList from "./pages/orderlist/index";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./pages/bar/index";
// import Form from "./scenes/form";
import Line from "./pages/line/index";
import Pie from "./pages/pie/index";
// import FAQ from "./scenes/faq";
import Geography from "./pages/geo/index"

function App() {
  const[theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

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
              <Route path="/projects" element={<Bar />} />
              <Route path="/Courses" element={<Pie />} />
              <Route path="/User" element={<Geography />} />
              {/*
              <Route path="/User" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
