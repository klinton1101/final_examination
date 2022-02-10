import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store"
import Router from "./router";

export default function app() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
