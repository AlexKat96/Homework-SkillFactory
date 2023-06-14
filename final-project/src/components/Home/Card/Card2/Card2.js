import React from "react";
import css from "./Card2.module.scss"

const Card2 = () => {
    return(
        <div className={css.rate}>
            <div className={css.rate_header_2}>
              <div className={css.rate_header_content_left}>
                <h3 className={css.rate_header_caption}>Pro</h3>
                <p className={css.rate_header_description}>Для HR и фрилансеров</p>
              </div>
              <div className={css.rate_header_img_2}></div>
            </div>
            <div className={css.rate_main}>
              <div className={css.rate_cost}>
                <div className={css.rate_price}>
                  <div className={css.new_price}>1299 ₽</div>
                  <div className={css.old_price}>2600 ₽</div>
                </div>
                <p className={css.installment_plan}>или 279 ₽/мес. при рассрочке на 24 мес.</p>
              </div>
              <div className={css.rate_description}>
                <h3 className={css.rate_description_caption}>В тариф входит:</h3>
                <ul className={css.list}>
                  <li className={css.marker}>Все пункты тарифа Beginner</li>
                  <li className={css.marker}>Экспорт истории</li>
                  <li className={css.marker}>Рекомендации по приоритетам</li>
                </ul>
              </div>
              <button className={css.button_rate}>Подробнее</button>
            </div>
        </div>
    )
}

export default Card2