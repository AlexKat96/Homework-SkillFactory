import React from 'react'
import { Link } from 'react-router-dom';
import css from "./Header.module.scss"

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.header_content}>
                <Link to={`/`} >
                    <div className={css.scan}></div>
                </Link>
                <nav className={css.menu}>
                    <ul className={css.navigation}>
                        <li className={css.menu_list} >
                            <Link to= "/" className={css.link}>
                                Главная
                            </Link>
                        </li>
                        <li className={css.menu_list}>
                            <Link to= "/" className={css.link}>
                                Тарифы
                            </Link>
                        </li> 
                        <li className={css.menu_list}>
                            <Link to= "/" className={css.link}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
                 <div className={css.loginOrRegistrate}>
                    <Link to="/Login" className={css.link}>
                        <a className={css.registate}>Зарегистрироваться</a>
                    </Link>
                    <div className={css.line}></div>
                    <Link to="/Login" className={css.link}>
                        <button className={css.button_login}>Войти</button>
                    </Link>
                </div>
                
            </div>
        </header>
    ); 
}

export default Header; 