import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../context/AuthContext"

import Chats from "./Chats"
import Login from "./login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
      <p className='footer' >Build by <a target='_blank' href='https://facebook.com/raihanhosen01' >Raihan hosen</a></p>
    </div>
  )
}
export default App