import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Switch,Route } from 'react-router-dom'
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className='airbnb' >
          <Header/>  
          <Switch>
            <Route path='/' component={Home}  exact/>
            <Route path='/search' component={SearchResult}/>
          </Switch>
          <Footer/>
      </div>
    </>
  );
}
