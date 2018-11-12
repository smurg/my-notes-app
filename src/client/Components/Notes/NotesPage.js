import React from 'react';
import { Redirect } from 'react-router-dom';
import NoteList from './NoteList';

class NotesPage extends React.Component {
  state = {
    notes: [],
    gotoNotePage: false, 
    loading: true
  }
  
  redirectToAddNotePage = () => {
    this.setState({ gotoNotePage: true });
  }
  
  componentDidMount() {
    fetch('http://localhost:3301/api/notes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ notes: data, loading: false });
      });
  }

  render () {
    const { gotoNotePage, notes } = this.state;
    const emptyMessage = 'You do not have Notes created yet.';
    return (
      gotoNotePage ? 
        <Redirect push to='/note' />  : 
        <div className='jumbotron bg-light'>
          <input type="submit"
            value="New Note"
            className="btn btn-primary mb-4"
            onClick={this.redirectToAddNotePage} />
          <NoteList 
            notes={notes}
            emptyMessage={emptyMessage}
            isEmpty={!notes.length} />
        </div>
    );
  }
}

export default NotesPage;