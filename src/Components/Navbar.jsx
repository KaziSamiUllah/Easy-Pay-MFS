import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-16 bg-primary flex justify-between md:px-8 lg:px-14">
        <Link to="/"><h1 className="btn btn-ghost text-2xl font-bold drop-shadow-lg">EasyPAY</h1></Link>
        <Link to="/login"><button className="btn bg-secondary border-none ">Login</button></Link>
      </div>
     
        
      
    </div>
  );
};

export default Navbar;
