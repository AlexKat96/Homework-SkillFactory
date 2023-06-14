import React from "react";
import css from "./Card1.module.scss"

const Card1 = () => {
    return(
        <div className={css.rate}>
            <div className={css.rate_header_1}>
                <div className={css.rate_header_content_left}>
                    <h3 className={css.rate_header_caption}>Begginer</h3>
                    <p className={css.rate_header_description}>Для небольшого исследования</p>
                </div>
                <div className={css.rate_header_img_1}></div>
            </div>
            <div className={css.rate_main}>
                <div className={css.rate_cost}>
                    <div className={css.rate_price}>
                        <div className={css.new_price}>799 ₽</div>
                        <div className={css.old_price}>1200 ₽</div>
                    </div>
                    <p className={css.installment_plan}>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                </div>
                <div className={css.rate_description}>
                    <h3 className={css.rate_description_caption}>В тариф входит:</h3>
                    <ul className={css.list}>
                        <li className={css.marker}>Безлимитная история запросов</li>
                        <li className={css.marker}>Безопасная сделка</li>
                        <li className={css.marker}>Поддержка 24/7</li>
                    </ul>
                </div>
                <button className={css.button_rate}>Подробнее</button>
            </div>
        </div>
    )
}

export default Card1 
