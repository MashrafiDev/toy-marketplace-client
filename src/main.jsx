import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import SignUp from "./Components/User/SignUp/SignUp";
import Login from "./Components/User/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
);