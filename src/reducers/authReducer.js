import { types } from "../types/types";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        username: action.payload.username,
        name: action.payload.name,
        surname: action.payload.surname,
        role: action.payload.role,
        token: action.payload.token,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};