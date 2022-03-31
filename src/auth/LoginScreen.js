import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  login,
  logout,
  startLoginEmailPassword,
} from "../actions/auth";
import AuthForm from "../components/AuthForm";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const loadState = () => {
    try {
      const session = JSON.parse(sessionStorage.getItem("session"));
      if (session === null) {
        return undefined;
      }
      const sessionObj = {
        username: session.userData.username,
        name: session.userData.name,
        surname: session.userData.surname,
        role: session.userData.role,
        token: session.jwt.token,
      };
      login({ sessionObj });
      return sessionObj;
    } catch (err) {
      return undefined;
    }
  };

  const auth = useSelector((state) => state.auth);

  const { name } = auth.name ? auth : loadState() || { name: undefined };

  const [formValues, handleInputChange] = useForm({
    username: "daniel@gmail.com",
    password: "password",
  });

  const { username, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(username, password));
  };

  const handleLogout = (e) => {
    dispatch(logout());
    sessionStorage.removeItem("session");
  };

  const handleAlertUser = async () => {
    const user = await dispatch(getUser(auth.token));
    console.log(user);
  };

  return (
    <>
      <h3>{name}</h3>
      {!name ? (
        <AuthForm
          username={username}
          password={password}
          handleLogin={handleLogin}
          handleInputChange={handleInputChange}
        />
      ) : (
        <>
          <button onClick={handleAlertUser}>Alert User</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};
export default LoginScreen;
