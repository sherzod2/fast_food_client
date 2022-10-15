import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider as AuthProvider } from "./Context/authContext";
import { Provider as CategoriesProvider } from "./Context/getCategories";
import { Provider as ShopsProvider } from "./Context/getShops";
import { Provider as FoodsProvider } from "./Context/getFoods";
import { Provider as OrdersProvider } from "./Context/getOrders";
// -----------
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5555/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <CategoriesProvider>
            <ShopsProvider>
              <FoodsProvider>
                <OrdersProvider>
                  <App />
                </OrdersProvider>
              </FoodsProvider>
            </ShopsProvider>
          </CategoriesProvider>
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
