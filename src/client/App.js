import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesPage from './Components/Notes/NotesPage';
import ManageNotePage from './Components/Notes/ManageNotePage';

const App = () => {
  return (
    <div className="container-fluid">
      
      <div className="main container">
        <header className="App-header">
          <h1 className="App-title">Notes App</h1>
        </header>
        <Switch>
          <Route exact path='/'component={NotesPage}></Route>
          <Route path='/note/:id' component={ManageNotePage}></Route>
          <Route strict path='/note' component={ManageNotePage}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
