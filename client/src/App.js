import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './components/Login/Login'
import UserProfile from './components/UserProfile/Profile'

import 'semantic-ui-css/semantic.min.css'
import Explore from './components/explore';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import FormPage from './components/forms/FormPage'
// import Follow from './components/Follow';
import SginUpForm from './components/Login/Signup'
// import TrendsHashtag from './components/TrendsHashtag';
// import WhoToFollow from './components/WhoToFollow';

import Home from "./components/Home"
import Bookmarks from "./components/Bookmarks"
import Signup from './components/Login/Signup';



function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
  }
  var nav = <div></div>

  if (localStorage.getItem('token')) {
    nav = <Navbar toggle={toggle} />
  }
  return (

    <div className="App">
      <Router >
        {nav}
        <Switch>
          <Route path="/signup" exact component={SginUpForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={Signup} />

          <Route path="/home" exact component={Home} />
          {/* <Route path="/hashtag" exact component={Hashtag} /> */}
          <Route path="/bookmarks" exact component={Bookmarks} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/profile" exact component={UserProfile} />

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App