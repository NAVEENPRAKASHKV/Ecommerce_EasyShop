import { useEffect, useState } from "react";
import "./App.css";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/Reducers/authReducer";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  const dispatch = useDispatch();
  const token = useSelector((store) => store.auth.token);
  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prevRoutes) => [...prevRoutes, routes]);
  }, []);
  useEffect(() => {
    dispatch(get_user_info());
  }, [token]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
