import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import "./App.css";

// Change the syntax:

const routes = [
  {
    path: "/", element: <Root />, children: [
      { path: "about", element: <About /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:title", element: <Article /> },
      { path: "authors/:name", element: <Author /> },
      {
        path: "categories", element: <Categories />, children: [
          { path: ":name", element: <Category /> }
        ]
      },
      {
        path: "profile", element: <Profile />, children: [
          { path: "edit", element: <EditProfileForm /> }
        ]
      }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
;
