import React, { useContext, useEffect, useState } from "react";
import Navigation from './Components/Navigation'
import Auth from "./context/store/Auth";

function App() {
  return (
    <div className="App">
      <Auth>
        <Navigation />
      </Auth>
    </div>
  );
}

export default App;
