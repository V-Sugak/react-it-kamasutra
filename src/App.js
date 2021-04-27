import React, { Profiler } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings'; 

import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs'

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/*<Dialogs/>*/}
      <div class="app-wrapper-content">
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
