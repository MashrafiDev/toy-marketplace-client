import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import SignUp from "./Components/User/SignUp/SignUp";
import Login from "./Components/User/Login/Login";
import HomeMain from "./Components/HomeMain/HomeMain";
import AllToys from "./Components/AllToys/AllToys";
import AddToys from "./Components/AddToys/AddToys";
import CurrentUserData from "./Components/CurrentUserData/CurrentUserData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomeMain></HomeMain>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:3000/allToy')
      },
      {
        path: '/add-toys',
        element: <AddToys></AddToys>
      },
      {
        path: '/my-toys',
        element: <CurrentUserData></CurrentUserData>
      },
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