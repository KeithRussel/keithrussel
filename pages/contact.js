import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import getRawBody from 'raw-body';
// import { useRouter } from 'next/router';

const contact = () => {
  const [mailName, setMailName] = useState('');
  const [mailAddress, setMailAddress] = useState('');
  const [mailText, setMailText] = useState('');
  // const router = useRouter();

  const submitContact = async (event) => {
    event.preventDefault();

    await fetch('/api/contact', {
      body: JSON.stringify({
        name: mailName,
        email: mailAddress,
        text: mailText,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((res) => {
      console.log('Fetch: ', res);
      if (res.status === 200) {
        setMailName('');
        setMailAddress('');
        setMailText('');
        alert('Message Sent');
      }
      // res.status === 200 ? router.push('/success') : router.push('error');
    });
  };

  return (
    <>
      <Head>
        <title>Keith Russel | Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <section id={styles.contact}>
        <div className={styles.container}>
          <h1>Contact Me</h1>
          <form onSubmit={submitContact}>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              name='name'
              value={mailName}
              onChange={(e) => setMailName(e.target.value)}
              type='text'
              autoComplete='name'
              required
            />
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              email='email'
              value={mailAddress}
              onChange={(e) => setMailAddress(e.target.value)}
              type='email'
              autoComplete='email'
              required
            />
            <label htmlFor='text'>Message:</label>
            <textarea
              id='text'
              value={mailText}
              onChange={(e) => setMailText(e.target.value)}
              type='textarea'
              autoComplete='text'
              required
            />
            <button type='submit'>Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default contact;
