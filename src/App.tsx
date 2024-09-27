import React from 'react';
import { TapBar, TextBlock } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <TextBlock />
      <TapBar />
    </div>
  );
};

export default App;
