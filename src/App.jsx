import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashbordlayout from "./Layout/Dashbordlayout";
import CRM from "./pages/CRM/Primary/CRM";
import Analytics from "./pages/Analytics/Primary/Analytics";

export const ThemeContext = createContext();

export function App() {
  const routes = createBrowserRouter([
    {
      element: <Dashbordlayout />,
      children: [
        {
          element: <CRM />,
          path: "/CRM",
          index: true,
        },
        {
          element: <Analytics />,
          path: "/",
          index: true,
        },
      ],
    },
  ]);
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")));


  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <RouterProvider router={routes} />
    </ThemeContext.Provider>
  );
}

export default App;
