import { Header } from "./layout/Header";
import React from "react";

function App() {
  return (//когда не нужен div, но нужно положить несколько компонентов исп React.Fragment
     <React.Fragment> 
    <Header />
    </React.Fragment>
  );
}

export default App;
