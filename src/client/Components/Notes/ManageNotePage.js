import React, { Component } from 'react';
import NoteForm from './NoteForm';
import { Redirect } from 'react-router-dom';

class ManageNotePage extends Component {
  state = {
    note: { title: '', content: '' },
    backToNotes: false,
    loading: false
  }
  
  componentDidMount() {
    const noteId = this.props.match.params.id;
    if(noteId) {
      this.setState({ loading: true });
      fetch(`http://localhost:3301/api/notes/${noteId}`)
        .then((response) => {
          return response.json();
        })
        .then((noteData) => {
          console.log(noteData);
          this.setState({ note: noteData, loading: false });
        });
    }
  }

  updateNoteState = (event) => {
    const field = event.target.name;
    let note = this.state.note;
    note[field] = event.target.value;
    return this.setState({note: note});
  }

  saveNote = (event) => {
    event.preventDefault();
    const note = this.state.note;
    this.setState({ loading: true });
    fetch(`http://localhost:3301/api/notes/${note.id ? note.id : ''}`, 
      { 
        method: note.id ? 'PUT' : 'POST',
        body: JSON.stringify(note),
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
      })
      .then((response) => {
        if (!response.ok) { 
          throw Error(response.status);
        } 
        this.setState({ backToNotes: true });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  }
  
  deleteNote = (event) => {
    event.preventDefault();
    const note = this.state.note;
    this.setState({ loading: true });
    fetch(`http://localhost:3301/api/notes/${note.id}`, 
      { 
        method: 'DELETE'
      })
      .then((response) => {
        if (!response.ok) { 
          throw Error(response.status);
        } 
        this.setState({ backToNotes: true });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  goBack = (event) => {
    event.preventDefault();
    this.setState({ backToNotes: true });
  }

  render() {
    const { backToNotes, loading } = this.state;
    return (
      backToNotes ? 
        <Redirect push to='/' />  : 
        <NoteForm 
          note={this.state.note}
          onChange={this.updateNoteState}
          onSave={this.saveNote}
          onDelete={this.deleteNote}
          goBack={this.goBack}
          loading={loading}/>
    );
  }
}

export default ManageNotePage;