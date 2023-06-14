import React from "react";
import css from "./Card3.module.scss"

const Card3 = () => {
    return(
        <div className={css.rate}>
            <div className={css.rate_header_3}>
                <div className={css.rate_header_content_left}>
                    <h3 className={css.rate_header_caption}>Business</h3>
                    <p className={css.rate_header_description}>Для корпоративных клиентов</p>
                </div>
                <div className={css.rate_header_img_3}></div>
            </div>
            <div className={css.rate_main}>
                <div className={css.rate_cost}>
                    <div className={css.rate_price}>
                        <div className={css.new_price}>2379 ₽</div>
                        <div className={css.old_price}>3700 ₽</div>
                    </div>
                </div>

                <div className={css.rate_description}>
                    <h3 className={css.rate_description_caption}>В тариф входит:</h3>
                    <ul className={css.list}>
                        <li className={css.marker}>Все пункты тарифа Pro</li>
                        <li className={css.marker}>Безлимитное количество запросов</li>
                        <li className={css.marker}>Приоритетная поддержка</li>
                    </ul>
                </div>
                <button className={css.button_rate}>Подробнее</button>
            </div>
        </div>
    )
}

export default Card3

