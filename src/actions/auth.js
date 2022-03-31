import { types } from "../types/types";

//const urlPath = "https://expensespersonalproject.herokuapp.com";
const urlPath = "http://localhost:8080";

export const startLoginEmailPassword = (username, password) => {
  return (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    fetch(urlPath + "/authenticate", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch(
          login(
            data.userData.username,
            data.userData.name,
            data.userData.surname,
            data.userData.role,
            data.jwt.token
          )
        );
        sessionStorage.setItem("session", JSON.stringify(data));
      });
  };
};

export const getUser = (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return () =>
    fetch(urlPath + "/user", requestOptions).then((response) =>
      response.json()
    );
};

export const login = (username, name, surname, role, token) => ({
  type: types.login,
  payload: {
    username,
    name,
    surname,
    role,
    token,
  },
});
export const logout = () => ({
  type: types.logout,
  payload: {},
});
