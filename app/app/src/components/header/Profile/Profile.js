import {IconChevron} from "../../common/icons/icons-chevron";
import {IconProfile} from "../../common/icons/icons-profile";
import css from './profile.module.scss'
import {useState} from "react";

export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
             onClick={() => setIsMenuShown(!isMenuShown)}>
            <IconProfile/>
            <div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
                <IconChevron/>
            </div>

            {isMenuShown && <div className={css.menu}>
                <div className={css.list}>Profile</div>
                <div className={css.list}>Log Out</div>
            </div>
            }
        </div>
    )
}