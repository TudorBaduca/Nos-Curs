import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Mainvid from './Mainvid';
import Secondaryvid from './Secondaryvid';
import Footer from './Footer';
import Menu from './Menu';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LogIn from './LogIn';
import Course from "./Course";

function App() {
  var [menuIsVisible, setmenuIsVisible] = useState(false);
  function showmenu(event) {
    setmenuIsVisible(true);
    event.stopPropagation();


  }

  function hidemenu() {
    setmenuIsVisible(false);
  }

  return (
    <Router>
      <div class="page" onClick={hidemenu}>

        <Header showmenu={showmenu}></Header>
        <Switch>
          <Route exact path="/"> {/* Pagina principala */} 
            <Mainvid></Mainvid>

            <Secondaryvid></Secondaryvid>

            <Footer></Footer>

          </Route>
          <Route path="/LogIn">{/* Pagina de login */} <LogIn></LogIn> </Route>
          <Route path="/Course">{/* Pagina de curs */}<Course></Course></Route>

        </Switch>



        <Menu menuIsVisible={menuIsVisible}></Menu>


      </div>
    </Router>


  );
}

export default App;


