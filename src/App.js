import React from "react";
import "./App.css";
import { Piano } from "./components/Piano";
import { RootStore } from "./store/RootStore";
import { Provider } from "mobx-react";

const rootStore = RootStore.create();
window.STATE = rootStore;

function App() {
  return (
    <Provider rootStore={rootStore}>
      <div className="App">
        <Piano />
      </div>
    </Provider>
  );
}

export default App;
