import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routeUtil from "./util/routeUtil";

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <RouterProvider router={routeUtil} />
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
