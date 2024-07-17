import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const changeLogin = () => {
    SignOut();
  };

  return (
    <div>
      <div className="navbar h-16 bg-primary flex justify-between md:px-8 lg:px-14">
        <Link to="/">
          <h1 className="btn btn-ghost text-2xl font-bold drop-shadow-lg">
            EasyPAY
          </h1>
        </Link>
        {user ? (
          <button
            onClick={changeLogin}
            className="btn bg-secondary border-none "
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-secondary border-none ">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
