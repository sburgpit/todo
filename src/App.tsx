import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import TodoScreen from "./screens/TodoScreen";
import AboutScreen from './screens/AboutScreen'


const App: FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoScreen} path="/" exact />
          <Route component={AboutScreen} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
