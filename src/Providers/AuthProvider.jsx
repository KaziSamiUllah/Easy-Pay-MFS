import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);
  const [loading, setLoading] = useState(false);
  console.log(user);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const SignUp = async (signUpData) => {
    setLoading(true);
    const res = await axios.post(
      "http://localhost:5000/addNewUser",
      signUpData
    );
    if (res.data.acknowledged) setUser(signUpData);
    setLoading(false);
    return res.data;
  };

  const SignIn = async (signinData) => {
    setLoading(true);
    await axios
      .post("http://localhost:5000/findUser", signinData)
      .then((response) => {
        const data = response;
        console.log(data);
        if (data.data) {
          console.log(data.data);
          setUser(data.data);
          setLoading(false);
          return user;
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
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
