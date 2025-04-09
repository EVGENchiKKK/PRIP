import React from 'react';

export const CallToAction = () => {
  return (
    <section style={styles.cta}>
      <h2 style={styles.title}>Раскрой для себя мир музыки по-новому!</h2>
      <button style={styles.button}>Присоединиться</button>
    </section>
  );
}

const styles = {
  cta: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#bb86fc',
    color: '#fff',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.7rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#3700b3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};