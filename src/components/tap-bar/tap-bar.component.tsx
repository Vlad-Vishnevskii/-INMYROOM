import React from 'react';
import { useTapBarItems } from './tap-bar.hooks';
import { NavigationButton } from '../navigation-button';
import classNames from 'classnames';
import styles from './style.module.scss';

export const TapBar: React.FC = () => {
  const { tapBarItems, tapBarVisible } = useTapBarItems();

  return (
    <div
      className={classNames(styles.tapBar, {
        [styles.tapBar_hiiden]: !tapBarVisible,
      })}
    >
      <nav className={styles.tapBar_navigation}>
        {tapBarItems.map(button => (
          <NavigationButton key={button.id} {...button} />
        ))}
      </nav>
    </div>
  );
};
