import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import Loto from "./components/Loto/Loto";
import {About} from "./components/About";
import {Home} from "./components/Home";
import {NotFound} from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/loto"  component={Loto}/>
          <Route path="/about"  component={About}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
