import React from 'react';
import styles from './style.module.scss';

export const TextBlock: React.FC = () => {
  return (
    <section className={styles.textBlock}>
      {Array.from({ length: 150 }, (_, index) => (
        <p key={index}>Тестовый текст</p>
      ))}
    </section>
  );
};
