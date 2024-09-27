import React from 'react';
import { useTapBarItems } from './tap-bar.hooks';
import styles from './style.module.scss';

export const TapBar: React.FC = () => {
  const { tapBarItems } = useTapBarItems();
  return (
    <div className={styles.tapBar}>
      <nav className={styles.tapBar_navigation}>
        {tapBarItems.map(button => (
          <button>{button.icon}</button>
        ))}
      </nav>
    </div>
  );
};
