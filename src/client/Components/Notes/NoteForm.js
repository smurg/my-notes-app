import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const NoteForm = ({note, onSave, onChange, onDelete, goBack, loading}) => {
  return (
    <form>
      <h3>Create Note</h3>
      <TextInput 
        name='title'
        label='Title'
        value={note.title}
        onChange={onChange} />
      
      <TextInput 
        name='content'
        label='Content'
        value={note.content}
        onChange={onChange} />
      
      <input 
        type='button'
        disabled={loading}
        value='Back'
        className='btn btn-secondary mr-4'
        onClick={goBack} />
      
      <input 
        type='submit'
        disabled={loading}
        value={loading ? 'Saving...': 'Save'}
        className='btn btn-primary'
        onClick={onSave} />
      
      { note.id && <input 
        type='submit'
        disabled={loading}
        value='Delete'
        className='btn btn-danger float-right'
        onClick={onDelete} /> }

    </form>
  );
};

NoteForm.propTypes = {
  note: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default NoteForm;
