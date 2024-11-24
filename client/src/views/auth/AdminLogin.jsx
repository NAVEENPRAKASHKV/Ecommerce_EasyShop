import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { overRideStyle } from "../../utils/spinnerProperty";

const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loader, errorMessage, successMessage } = useSelector(
    (store) => store.auth
  );

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-[#719671] flex justify-center items-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md">
        <div className="p-6 shadow-xl ">
          <div className="flex justify-center w-[100px] mb-5">
            <img src="http://localhost:3000/images/logo.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Admin Login
          </h1>

          {/* form */}
          <form onSubmit={handleSubmit}>
            {/* email */}
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={state.email}
                onChange={inputHandle}
                className="border-2 rounded-md p-2 focus:outline-none focus:border-blue-500 required:"
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={state.password}
                onChange={inputHandle}
                className="border-2 rounded-md p-2 focus:outline-none focus:border-blue-500 required:"
              />
            </div>
            {/*Forgetpassword  */}
            <div className="flex justify-end w-full gap-3 mb-3">
              <Link>
                <p className="text-blue-600 font-semibold hover:text-blue-900 text-sm">
                  Forget Password
                </p>
              </Link>
            </div>
            {/* signin button */}
            <div className="flex justify-center mb-3 ">
              <button
                disabled={loader ? true : false}
                className="bg-green-600 w-full text-white px-3  py-2 rounded-lg hover:bg-green-700"
              >
                {loader ? (
                  <PropagateLoader color="#fff" cssOverride={overRideStyle} />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
