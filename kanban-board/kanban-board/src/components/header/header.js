import css from './header.module.scss'
import {Profile} from "./Profile/Profile";

export const Header = () => {
    return (
        <header className={css.header}>
            <h1>Kanban Board</h1>
            <Profile/>
        </header>
    )
}