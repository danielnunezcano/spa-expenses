import React from "react";

const AuthForm = ({ username, password, handleLogin, handleInputChange }) => {
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="off"
          value={username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default AuthForm;