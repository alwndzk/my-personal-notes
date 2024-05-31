import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { login } from '../utils/network-data';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <div className='input-login'>
      <h2>Silahkan Masukkan Email Anda</h2>
      <InputLogin login={onLogin} />
      <p>Belum Punya Akun? <Link to="/register">Daftar di Sini</Link></p>
      </div>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;