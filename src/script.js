import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Error from "./Error";
import { useState } from "react";
import ResMenu from "./ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./Cart";
let Body = lazy(() => import("./Body"));

let App_container = () => {
  let [userName, setUserName] = useState("Manii");
  return (
    <Provider store={AppStore}>
      <div className="app">
        <Header />
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
};

let RouterList = createBrowserRouter([
  {
    path: "/",
    element: <App_container />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>loading..</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RouterList} />);
