import React from 'react'
import css from "./Footer.module.scss"

const Footer = () => {


  return (
    <footer className={css.footer}>
      <div className={css.footer_content}>

        <div className={css.footer_left} >
        </div>

        <div className={css.footer_right}>
          <ul>
            <li>
            г. Москва, Цветной б-р, 40
            </li>
            <li>
            +7 495 771 21 11
            </li>
            <li>
            info@skan.ru
            </li><br/>
            <li>
            Copyright. 2022
            </li>
          </ul>
          
        </div>
      </div>
    </footer>
   
  )
}

export default Footer