import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './components/Login/Login'
import SginUpForm from './components/Login/Signup'

import Tweet from './components/Tweet';
import 'semantic-ui-css/semantic.min.css'



function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
  }
  const [user, setuser] = useState([
    {
      userName: '',

    }
  ])


  useEffect(() => {
    fetch('/test').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setuser(jsonRes))
  })

  return (
    <div className="App">
      <Router >
        <Navbar toggle={toggle} />
        <Tweet></Tweet>
        <Switch>
          <Route path="/home" exact component={LoginForm} />
          <Route path="/bookmarks" exact component={SginUpForm} />

        </Switch>
        <Footer />
      </Router>

      {/* {user.map(user => {
        return (
          <div>
            <h1>{user.userName}</h1>

          </div>
        )
      })} */}
    </div>
  );
}

export default App;
