import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import { FiPlus } from 'react-icons/fi';

function AddPageWrapper() {
  const navigate = useNavigate();
  const [currentNote, setCurrentNote] = useState({
    title: '',
    body: ''
  });

  function onTitleChangeEventHandler(event) {
    setCurrentNote((prevCurrentNote) => {
      return {
        ...prevCurrentNote,
        title: event.target.value
      };
    });
  }

  function onBodyInputEventHandler(event) {
    setCurrentNote((prevCurrentNote) => {
      return {
        ...prevCurrentNote,
        body: event.target.innerHTML
      };
    });
  }

  async function onAddNoteHandler() {
    try {
      await addNote(currentNote);
      console.log('Catatan berhasil ditambahkan');
      navigate('/');
    } catch (error) {
      console.error('Gagal menambahkan catatan:', error);
      //catatan : menggunakan try and catch dalam proses penambahan notes
    }
  }

  return (
    <section className='add-new-page'>
      <NoteInput state={currentNote} onTitleChange={onTitleChangeEventHandler} onBodyInput={onBodyInputEventHandler} />
      <div className='add-new-page__action'>
        <button className='action' title='SIMPAN' onClick={onAddNoteHandler}><FiPlus /></button>
      </div>
    </section>
  );
}

export default AddPageWrapper;
