import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { Auth0Provider } from '@auth0/auth0-react';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-nqiviftpqe37b0k3.us.auth0.com"
    clientId="obJESHou4ZvMrjsBc26qG2Eol7cJ1UJ3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
      ,
    </Provider>
  </Auth0Provider>
);
