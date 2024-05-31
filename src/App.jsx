import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePagesWrapper from './pages/HomePageNotes';
import AddPageNotes from './pages/AddPageNotes';
import DetailPageWrapper from './pages/DetailPageNotes';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ThemeProvider } from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme.jsx';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme')) || 'dark';

  const toggleTheme = () => {
    const switchTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', switchTheme);
    setTheme(switchTheme);
  };

  const fetchData = async () => {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  useEffect(() => {
    fetchData().then(() => {
      setInitializing(false);
    });
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    fetchData();
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  if (initializing) {
    return null;
  }

  return (
  <ThemeProvider value={{ theme, toggleTheme }}>
    <div className='app-container' data-theme={theme}>
      <header>
        <ToggleTheme />
        <Navigation logout={onLogout} name={authedUser?.name} />
      </header>
      <main>
        <Routes>
          {authedUser ? (
            <>
              <Route path='/' element={<HomePagesWrapper />} />
              <Route path='/notes/add' element={<AddPageNotes />} />
              <Route path='/notes/:id' element={<DetailPageWrapper />} />
            </>
          ) : (
            <>
              <Route path='/' element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path='/register' element={<RegisterPage />} />
            </>
          )}
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
