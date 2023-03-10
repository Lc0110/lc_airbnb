import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";

const App = memo(() => {
  return (
    <div>
      <div className="app">
        <AppHeader></AppHeader>
        <div className="content">{useRoutes(routes)}</div>
        <AppFooter></AppFooter>
      </div>
    </div>
  );
});

export default App;
