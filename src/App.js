import { useState } from 'react';
import './App.css';


// Components
import Header from './Components/Header/Header.jsx';
import Breadcrumb from './Components/Header/Breadcrumb.jsx';
import MenuBar from './Components/Header/MenuBar.jsx';
import Body from './Components/Body.jsx';
import Footer from './Components/Footer/Footer.jsx';


// Libraries
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  let [switchMenu, setSwitchMenu] = useState(false);

  const transitions = useTransition(switchMenu, null, {
    from: { opacity: 0, trasform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  });

  let menuList = transitions.map(({ item, key, props }) =>
    item && <animated.div
      key={key}
      style={props}
    >
      <MenuBar hideMenuOnClick={() => setSwitchMenu(switchMenu == false)} />
    </animated.div>
  );


  // Add Page Title
  let currentPage;

  return (
    <div className="App" >

      <Router>


        {/* Header */}

        <Header
          showMenu={() => setSwitchMenu(switchMenu == false ? true : false)}
          // Enable MenuIconSwitch !!!
          hideMenu={() => setSwitchMenu(false)}
          showMobileMenu={() => setSwitchMenu(switchMenu == false ? true : false)}
          menuIcon={switchMenu == false ? faBars : faTimes}
        />
        <Breadcrumb />

        <div id="content-main">

          {
            // switchMenu == true ?  : null
            menuList
          }



          {/* Body */}

          {/* {
            switchMenu == false ? <h1 id="page-heading">{currentPage}</h1> : null
          } */}

          {
            switchMenu == false ? <Body /> : null
          }


          {/* Footer */}

        </div>


        {
          switchMenu == false ? <Footer /> : null
        }

      </Router>


    </div>
  );
}

export default App;
