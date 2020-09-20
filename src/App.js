import React from "react";
import "./style.scss";
import { Piano } from "./components/Piano";
import { RootStore } from "./store/RootStore";
import { Provider } from "mobx-react";
import { DashBoard } from "./components/DashBoard";

const rootStore = RootStore.create();
window.STATE = rootStore;

function App() {
  return (
    <Provider rootStore={rootStore}>
      <Piano />
      <DashBoard />
    </Provider>
  );
}

export default App;
