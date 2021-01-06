import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Home from './Components/Home'
import Disc from './Components/Disc'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/discapacidad" component={Disc} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
