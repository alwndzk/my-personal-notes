import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
 
function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
  const { error} = await register(user);
    if (!error) {
      console.log('Akun Sukses Di Buat!')
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <div className='input-register'>
      <h2>Silahkan Daftar Akun Terlebih Dahulu</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Sudah Punya Akun? <Link to="/">Masuk</Link></p>
      </div>
    </section>
  )
}
 
export default RegisterPage;