import React from "react";
import { YellowBox } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import reducers from "./src/reducers";
import Home from "./src/Home";

YellowBox.ignoreWarnings(["Remote debugger"]);

const store = applyMiddleware(thunk, promise)(createStore)(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
