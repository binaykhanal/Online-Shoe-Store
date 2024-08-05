import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { MainRouter } from "./router/Mainrouter.jsx";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { MyContextProvider } from "./context/ContextApi.jsx";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyContextProvider>
          <RouterProvider router={MainRouter} />
        </MyContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
