import React, { useState } from 'react';

const AppForm = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  // const [name, setName] = useState(''); // 같은 성격의 데이타는 한 그룹에 모아둔다. object로 묶음
  // const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // 현재 입력되고 있는 tag name의 index에 value assign
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleClick}
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleClick}
      />
      <button type='submit' className='submit'>
        Submit
      </button>
    </form>
  );
};

export default AppForm;
