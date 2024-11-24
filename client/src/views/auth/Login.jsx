import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seller_login, messageClear } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";
import { overRideStyle } from "../../utils/spinnerProperty";
import { PropagateLoader } from "react-spinners";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, successMessage, errorMessage } = useSelector(
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
    dispatch(seller_login(state));
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-[#719671] flex justify-center items-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md">
        <div className="p-6 shadow-xl">
          <h1 className="text-xl font-bold text-gray-800">
            Welcome to EasyShop
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Please Login in Your Account
          </p>
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
                disabled={loader}
                className="bg-green-600 w-full text-white px-3  py-2 rounded-lg hover:bg-green-700"
              >
                {loader ? (
                  <PropagateLoader color="#fff" cssOverride={overRideStyle} />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            {/* new to EasyShop */}
            <div className="flex justify-center gap-2 mb-3 text-[0.75em]">
              <span>New to EasyShop? </span>{" "}
              <Link
                to="/register"
                className="font-semibold hover:text-blue-600"
              >
                Create an Account
              </Link>
            </div>
            {/* or */}
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
              <div className="w-[10%] justify-center items-center">
                <span className="pb">Or</span>
              </div>
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
            </div>
            {/* google signin */}
            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-3  py-2 rounded-lg hover:bg-red-700 w-full flex justify-center items-center">
                <span className="pr-3">
                  <FaGoogle />
                </span>
                <span>Google Sign In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
