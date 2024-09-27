import React from 'react';
import styles from './style.module.scss';

export const TextBlock: React.FC = () => {
  return (
    <section className={styles.textBlock}>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <p>Добрый день! меня зовут Вишневский Владислав, мне 32 года.</p>
          <p>
            Более 14 лет работаю в IT сфере, во фронтенд разработке более 3 лет, работал в начале
            немного верстальщиком, а затем перешел в полноценные фронты.
          </p>
          <p>
            Более двух лет имею опыт продуктовой разработки, работаем над беттинговым проектом и
            онлайн казино, работал над решением различного многожесва b2c задач по фронту:
            <ul>
              <li>пополнение и вывод дс</li>
              <li>акциооные механики</li>
              <li>внедрял на фронте игровой сервис от поставщика игр</li>
              <li>работал над реализацией функционала админ панелей</li>
              <li>
                реализовал и развил фунционал по управлению контентом путем внедрения CMS Strapi
              </li>
            </ul>
          </p>
          <p>
            В работе используем следующий стэк технологий:
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Html Pug</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>MobX</li>
              <li>Tailwind</li>
              <li>Sass</li>
            </ul>
          </p>
        </div>
      ))}
    </section>
  );
};
