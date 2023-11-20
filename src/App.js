import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import {Main} from './layout/Main';
import React from "react";

function App() {
  return (//когда не нужен div, но нужно положить несколько компонентов исп React.Fragment
     <React.Fragment> 
    <Header />
    <Main />
    <Footer />
    </React.Fragment>
  );
}

export default App;
