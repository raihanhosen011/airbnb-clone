import React from "react";
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";


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
