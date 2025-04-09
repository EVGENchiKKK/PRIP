import React from 'react';

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2023 Neofy. Все права защищены.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#282c34',
    color: '#fff',
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  },
};