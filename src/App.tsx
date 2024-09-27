import React from 'react';
import { TapBar } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <TapBar />
    </div>
  );
};

export default App;
