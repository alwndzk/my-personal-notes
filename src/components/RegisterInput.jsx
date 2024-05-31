import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [definePassword, setDefinePass] = useInput('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== definePassword) {
      return alert('Password tidak sama!');
    }
  
    try {
      await register({
        name,
        email,
        password,
      });
      //catatan : menggunakan try and catch untuk menguji proses registrasi
    } catch (error) {
      alert('Gagal melakukan registrasi. Silakan coba lagi.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>
      <input type="text" placeholder="Nama" value={name} onChange={setName} />
      <input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={setPassword} />
      <input type="password" placeholder="Konfirmasi Password" value={definePassword} onChange={setDefinePass} />
      <button type="submit">Daftar</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
