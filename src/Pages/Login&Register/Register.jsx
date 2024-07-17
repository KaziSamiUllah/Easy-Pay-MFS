import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { user, SignUp } = useContext(AuthContext);
  const navigate= useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const pin = e.target.pin.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
  
    const userData = { name, pin, mobile, email};
    
    console.log(userData);

   const res = await SignUp(userData)
   console.log(res);
   if(res.acknowledged){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User has been created",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/")
    
   }
  };

  const handlePinInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-3/5 lg:w-2/5">
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-primary"
              maxLength="5"
              onInput={handlePinInput}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-medium mb-2"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition duration-200"
          >
            Register
          </button>
        </form>
        <h1 className="my-2">
          Alraedy have an account? Please{" "}
          <span className=" font-semibold text-blue-700 hover:drop-shadow-lg hover:font-bold">
            <Link to="/login">LOGIN</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Register;
