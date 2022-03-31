import React from "react";
import {Provider} from "react-redux";
import {store} from "./store/store";
import LoginScreen from "./auth/LoginScreen";

const App = () => {
  return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
  );
}

export default App;