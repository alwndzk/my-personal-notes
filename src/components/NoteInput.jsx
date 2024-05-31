import React from 'react';
import PropTypes from 'prop-types';

function NoteInput({ state, onTitleChange, onBodyInput, initialBodyEdit }) {
  return (
    <div className='add-new-page__input'>
      <input
        className='add-new-page__input__title'
        placeholder='Masukkan Judul..'
        value={state.title}
        onChange={onTitleChange}
        spellCheck='false'
      />
      <div
        className='add-new-page__input__body'
        contentEditable='true'
        data-placeholder='Tulis catatanmu disini....'
        onInput={onBodyInput}
        spellCheck='false'
        suppressContentEditableWarning={true}
      >
        {initialBodyEdit !== undefined ? initialBodyEdit : ''}
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string
};

export default NoteInput;
