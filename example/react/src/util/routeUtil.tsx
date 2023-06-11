import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "src/route/layout";
const Main = lazy(() => import("src/route/main"));
const MyPage = lazy(() => import("src/route/my"));
const About = lazy(() => import("src/route/about"));
const ErrorPage = lazy(() => import("src/route/error"));

export enum RouteName {
  main = "/",
  myPage = "/my",
  about = "/about",
}

const routeUtil = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: RouteName.main, element: <Main /> },
      { path: RouteName.myPage, element: <MyPage /> },
      { path: RouteName.about, element: <About /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default routeUtil;
