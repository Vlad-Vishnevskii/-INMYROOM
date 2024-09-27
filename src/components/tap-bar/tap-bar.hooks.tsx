import React, { useCallback } from 'react';
import { ShareIcon } from '../icons';

export const useTapBarItems = () => {
  const handleShareClick = async () => {
    const pageUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Поделиться этой страницей:',
          url: pageUrl,
        });
      } catch (error) {
        alert('Ошибка при шаринге');
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(pageUrl);
        alert('Ссылка скопирована в буфер обмена!');
      } catch (error) {
        alert('Ошибка при копировании ссылки');
      }
    } else {
      alert('Ваш браузер не поддерживает функцию "Поделиться" и копирование в буфер обмена');
    }
  };

  const getTapBarItems = () => {
    return [
      {
        onClick: handleShareClick(),
        icon: <ShareIcon />,
        id: 0,
      },
      {
        icon: <ShareIcon />,
        onClick: () => {},
        id: 1,
      },
      {
        icon: <ShareIcon />,
        onClick: () => {},
        count: 7,
        id: 2,
      },
      {
        icon: <ShareIcon />,
        onClick: () => {},
        count: 28,
        id: 3,
      },
    ];
  };

  return {
    tapBarItems: getTapBarItems(),
  };
};
