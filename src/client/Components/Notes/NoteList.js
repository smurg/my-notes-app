import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import HOCWithEmptyMessage from '../common/HOCWithEmptyMessage';

const CourseList = ({ notes }) => { 
  const emptyMessage = 'You do not have Notes created yet.';
  return (
    <div className="list-group">
      {!notes.length && (
        <div className="alert alert-light" role="alert">
          {emptyMessage}
        </div>
      )}
      {notes.map((note) => 
        <Note key={note.id} note={note} /> 
      )}
    </div>
  );
};

CourseList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default HOCWithEmptyMessage(CourseList);
