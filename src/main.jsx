import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistedStore } from "./redux/store.js";
import { store } from "./redux/store.js";
import { App } from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
