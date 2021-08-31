import React, { Profiler } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs'

const App = (props) => {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile'
          render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route path='/dialogs'
          render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>

  );
}


export default App;
