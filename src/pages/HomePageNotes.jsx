import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import SearchList from '../components/SearchList';
import { getActiveNotes } from '../utils/network-data';
import { FiPlus } from 'react-icons/fi';
import { useNavigate, useSearchParams } from 'react-router-dom';

function HomePagesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);

  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const navigate = useNavigate();
  function onAddButtonHandler() {
    navigate('/notes/add');
  }

  function onSearchKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filter = notes ? notes.filter(({ title }) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  }) : []

  return (
    <section className='homepage'>
      <h2>Daftar Catatan Aktif</h2>
      <SearchList searchKeyword={keyword} onSearchKeywordChange={onSearchKeywordChange} />
      <NoteList notes={filter} />
      <div className='homepage__action'>
        <button className='action' title='TAMBAH' onClick={onAddButtonHandler}><FiPlus /></button>
      </div>
    </section>
  );
}

export default HomePagesWrapper;
