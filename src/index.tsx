import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";
import { store } from "./redux/store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import App from "./App";
import { FileProvider } from "./context/FileContext";
import { ImgProvider } from "./context/ProductImagesContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <ShoppingCartProvider>
          <Provider store={store}>
            <FileProvider>
            <ImgProvider>
              <App />
            </ImgProvider>
            </FileProvider>
          </Provider>
        </ShoppingCartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
