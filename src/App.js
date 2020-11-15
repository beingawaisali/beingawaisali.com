import './App.css';
import { useState } from 'react';

// Components
import Header from './Components/Header/Header.jsx';
import Breadcrumb from './Components/Header/Breadcrumb.jsx';
import MenuBar from './Components/Header/MenuBar.jsx';

import {useTransition, animated} from 'react-spring'

// Routes

function App() {

  let [switchMenu, setSwitchMenu] = useState(false);

  const transitions = useTransition(switchMenu, null, {
    from: { opacity: 0, trasform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%' },
    leave: { opacity: 0, translateX: 'translateX(100%)' },
  })

  return (
    <div className="App">

      {/* Header */}

      <Header
        showMenu={ () => setSwitchMenu( switchMenu == false ? true : false ) } 
        // Enable MenuIconSwitch !!!
        hideMenu={ () => setSwitchMenu(false) }
        showMobileManu={ () => setSwitchMenu( switchMenu == false ? true : false ) }
      />
      <Breadcrumb />
      {
        // switchMenu == true ?  : null

        transitions.map(({ item, key, props }) =>
          item && <animated.div 
                    key={key} 
                    style={props}
          >
            <MenuBar />
          </animated.div>
        )
      }

      {/* Body */}

      {/* Footer */}
      
    </div>
  );
}

export default App;
