import React from 'react';
import NeoPrem from "./../../image/img/Premium(чёрный шрифт).png"

export const CallToAction = () => {
  return (
    <section style={styles.cta}>
      <h2 style={styles.title}>Раскрой для себя мир музыки по-новому!</h2>
      <hr style={styles.hr}/>
      <p style={styles.par}>Для новых пользователей подписка Neofy+
      бесплатна на 1 месяц</p>
      <hr style={styles.hrTwo}/>
      <img style={styles.karting} src={NeoPrem}/>
      <button style={styles.button}>Присоединиться</button>
    </section>
  );
}

const styles = {
  cta: {
    width: '900px',
    height: '442px',
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(-60deg, #16DAC4 0%, #15FF00 100%)',
    borderRadius: '20px'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  hr: {
    width: '80%',
    height: '10px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: '0 5px 10px black',
  },
  hrTwo: {
    width: '60%',
    height: '10px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: '0 5px 10px black',
  },
  karting: {
    margin: '20px 0'
  },
  button: {
    padding: '0.7rem 2rem',
    fontSize: '1rem',
    backgroundColor: 'rgb(150, 255, 0)',
    color: '#000',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};