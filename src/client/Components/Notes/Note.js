import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Note = ({ note }) => {
  return (
    <Link to={'/note/' + note.id} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{note.title}</h5>
      </div>
      <p className="mb-1">{note.content}</p>
    </Link>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
