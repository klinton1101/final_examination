import React from "react";
import Nav from "../srcklinth/components/nav";

import { Provider } from "react-redux";
import store from "./redux/store";

import Router from "./router";
export default function App() {
  return (
<Provider store={store}>
<Nav/>
<Router />
</Provider>    
  );
}
