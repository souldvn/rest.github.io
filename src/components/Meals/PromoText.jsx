import styles from './PromoText.module.css'
import React from 'react';

const PromoText = (props) => {
  return (
    <section className={styles['promo-text']}>
      <h2>Онлайн Суши Ресторан Японской кухни</h2>
      <p>
        Японская кухня - это онлайн суши-ресторан, в котором любимые суши и
        сашими, роллы и другие блюда национальной японской кухниделает команда
        профессиональных поваров
      </p>
      <p>
        Быстрая работа и качественная продукция, а также настоящие компоненты
        придают хороший вкус блюдам, дарят наслаждение от трапезы
      </p>
    </section>
  );
};

export default PromoText;
