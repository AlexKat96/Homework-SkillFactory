import React from 'react'
import css from "./Home.module.scss"
import Card1 from "../Home/Card/Card1/Card1.js"
import Card2 from "../Home/Card/Card2/Card2.js"
import Card3 from "../Home/Card/Card3/Card3.js"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.home_content}>
        <div className={css.service}>
          <div className={css.service_left}>
            <h1 className={css.service_left__caption}>
            сервис по поиску публикаций
            <br/>о компании
            <br/>по его ИНН
            </h1>

            <p className={css.service_left__description}>
            Комплексный анализ публикаций, получение данных <br/>
            в формате PDF на электронную почту.
            </p>
            
            <Link to="/Search" className={css.link}>
              <button className={css.button_service}> Запросить данные</button>
            </Link>

          </div>
          <div className={css.service_right}></div>
        </div>
        <div className={css.value}>
          <h2 className={css.home_caption}>Почему именно мы</h2>
        </div>

        <div className={css.img}></div>
        <h2 className={css.home_caption}>Тарифы</h2>
        <div className={css.rates}>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>  
    </div>
  )
}

export default Home