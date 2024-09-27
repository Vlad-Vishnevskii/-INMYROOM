import { useState, useEffect, useRef } from 'react';
import { ShareIcon, TopIcon, CommentIcon, LikeIcon } from '../icons';

export const useTapBarItems = () => {
  const [commentsCount, setCommentsCount] = useState(7);
  const [likesCount, setLikesCount] = useState(28);
  const [tapBarVisible, setTapBarVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCommentClick = () => {
    setCommentsCount(prev => prev + 1);
  };

  const handleLikeClick = () => {
    setLikesCount(prev => prev + 1);
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'тестовое задание на позицию frontend разработчик',
          url: window.location.href,
        });
      } catch (error) {
        alert('Ошибка при шаринге');
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Ссылка скопирована в буфер обмена!');
      } catch (error) {
        alert('Ошибка при копировании ссылки');
      }
    } else {
      alert('Ваш браузер не поддерживает функцию "Поделиться" и копирование в буфер обмена');
    }
  };

  const handleTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getTapBarItems = () => {
    return [
      {
        onClick: handleShareClick,
        icon: <ShareIcon />,
        id: 0,
      },
      {
        icon: <TopIcon />,
        onClick: handleTopClick,
        id: 1,
      },
      {
        icon: <CommentIcon />,
        onClick: handleCommentClick,
        count: commentsCount,
        id: 2,
      },
      {
        icon: <LikeIcon />,
        onClick: handleLikeClick,
        count: likesCount,
        id: 3,
      },
    ];
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const isDownScrolling = window.scrollY > scrollPosition;
      const isTopScrolling = window.scrollY < scrollPosition;
      const isStopScrolling = window.scrollY === scrollPosition;

      if (window.scrollY > 200 && tapBarVisible && isDownScrolling) {
        if (!isTopScrolling) {
          setTapBarVisible(false);
        }
      }

      if (isTopScrolling && !tapBarVisible) {
        setTapBarVisible(true);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (!tapBarVisible) {
          setTapBarVisible(true);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      }, 1000);

      if (isStopScrolling) {
        setTapBarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, tapBarVisible]);

  return {
    tapBarItems: getTapBarItems(),
    tapBarVisible,
  };
};
