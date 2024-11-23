import { useEffect, useState } from "react";
import "./App.css";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prevRoutes) => [...prevRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
