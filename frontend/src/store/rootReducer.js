import authUserReducer from "./reducers/authUserReducer";
import homeReducer from "./reducers/homeReducer";
const rootReducer = {
  home: homeReducer,
  authUser: authUserReducer,
};
export default rootReducer;
