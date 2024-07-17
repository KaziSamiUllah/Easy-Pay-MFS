import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from local storage when the component initializes
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  console.log(user);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const SignUp = async (signUpData) => {
    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/addNewUser",
      signUpData
    );
    console.log(res.data.acknowledged);
    setLoading(false);
  };

  const SignIn = async (signinData) => {
    setLoading(true);
    axios.post("http://localhost:5000/findUser", signinData)
      .then(response => {
        const data = response;
        console.log(data);
        if (data.data) {
          setUser(data.data);
          setLoading(false);
        }
      });
  };

  const SignOut = async () => {
    setLoading(true);
    setUser(null);
    setLoading(false);
  };

  const authInfo = {
    user,
    SignIn,
    SignUp,
    SignOut,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
