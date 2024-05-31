import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes }) {
  return (
    <div>
      {notes?.length > 0 ? (
        <div className='notes-list'>
          {notes.map(({ id, title, body, createdAt }) => (
            <NoteItem 
            key={id}
            id={id}
            title={title}
            body={body} 
            createdAt={createdAt} 
            />
          ))}
        </div>
      ) : (
        <div className='notes-list-empty'>
          <h2 className='notes-list__empty'>Tidak ada catatan</h2>
        </div>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NoteList;
