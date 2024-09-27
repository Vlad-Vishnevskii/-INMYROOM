import React from 'react';
import styles from './style.module.scss';

type Props = {
  icon: React.ReactNode;
  onClick: () => void;
  count?: number;
};

export const NavigationButton: React.FC<Props> = ({ icon, onClick, count }) => {
  return (
    <button className={styles.navigationButton} type="button" onClick={onClick}>
      {icon}
      {!!count && <span>{count}</span>}
    </button>
  );
};
