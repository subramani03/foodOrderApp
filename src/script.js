import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Error from "./Error";
import ResMenu from "./ResMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

let App_container = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

let RouterList = createBrowserRouter([
  {
    path: "/",
    element: <App_container/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/restaurants/:resId",
        element:<ResMenu/>,
      },
      
    ]
  },
 
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RouterList} />);
