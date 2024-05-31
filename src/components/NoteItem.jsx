import React from 'react';
import { showFormattedDate } from '../utils/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className='note-item'>
      <h3 className='note-item__title'>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
      {body && <p className='note-item__body'>{body}</p>}
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default NoteItem;
