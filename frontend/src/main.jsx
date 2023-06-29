import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient();
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <GoogleOAuthProvider clientId="791986903839-ug3nvl2kgb9rbiqjnegki973cqfr8v3q.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </QueryClientProvider>
    ,
  </Provider>
);
