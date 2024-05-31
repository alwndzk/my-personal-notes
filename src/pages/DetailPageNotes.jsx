import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote } from '../utils/network-data';
import { FiTrash2 } from 'react-icons/fi';
import NoteDetail from '../components/NoteDetail';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({});

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, []);

  async function handleDeleteButtonClick() {
    try {
    await deleteNote(id);
    navigate('/');
  } catch(error) {
    console.error('Maaf, gagal menghapus catatan:', error);
    //catatan : menggunakan try and catch untuk menghapus notes
  }
}

  if (note === null) {
    return (
      <p>
        Invalid Request?
      </p>
    );
  }

  return (
    <section>
      <NoteDetail {...note} />
      <div className='detail-page__action'>
        <button className='action' title='HAPUS' onClick={handleDeleteButtonClick}><FiTrash2 /></button>
      </div>
    </section>
  );
}

export default DetailPageWrapper;
