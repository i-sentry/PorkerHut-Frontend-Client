import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";
import { store } from "./redux/store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <ShoppingCartProvider >
          <Provider store={store}>
            <App />
          </Provider>
        </ShoppingCartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
