import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { SignIn, loading, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {

        if(user?.role == "user"){
        navigate("/userHome")}

      else if(user?.role =="agent")
      {
        navigate("/agentHome")
      }
      else if(user?.role == "admin"){
        navigate("/adminHome")
      }
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const identifier = e.target.identifier.value;
    const pin = e.target.pin.value;
    const signinData = { identifier, pin };

    await SignIn(signinData);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-3/5 lg:w-2/5 ">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="identifier"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number or Email
            </label>
            <input
              type="number || email"
              id="identifier"
              name="identifier"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pin"
              className="block text-gray-700 font-medium mb-2"
            >
              5-digit PIN
            </label>

            <input
              type="password"
              id="pin"
              name="pin"
              className="w-full px-3 bg-white  py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              pattern="\d{5}"
              title="Please enter exactly 5 digits,"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition duration-200"
          >
            Login
          </button>
        </form>
        <h1 className="my-2">
          New to EasyPay? Please{" "}
          <span className=" font-semibold text-blue-700 hover:drop-shadow-lg hover:font-bold">
            <Link to="/register">REGISTER</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Login;
