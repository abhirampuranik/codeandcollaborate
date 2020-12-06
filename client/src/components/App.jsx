import React from 'react';
import Chat from './Chat'
import CodeEditor from './CodeEditor'
import Footer from './Footer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './Home'
import NavBar from './NavBar';


function App(){
    return(
        <div>
           <NavBar/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/">
                        <div className='rowC'>
                            <Chat/>
                            <CodeEditor/>    
                        </div>
                        </Route>                    
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
        
    )
}
export default App;


