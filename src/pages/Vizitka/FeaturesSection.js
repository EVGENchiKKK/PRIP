import React from 'react';

export const FeaturesSection = () => {
  const features = [
    "Умные алгоритмы рекомендаций",
    "Доступ к музыке на всех устройствах",
    "Простой и минималистичный дизайн",
    "Сообщество любителей музыки",
    "Поддержка независимых исполнителей",
    "Гибкие тарифы: бесплатный доступ и премиум-подписка",
  ];

  return (
    <section style={styles.features}>
      <h2 style={styles.title}>Наши преимущества</h2>
      <ul style={styles.list}>
        {features.map((feature, index) => (
          <li key={index} style={styles.item}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  features: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    fontSize: '1.1rem',
    margin: '0.5rem 0',
  },
};