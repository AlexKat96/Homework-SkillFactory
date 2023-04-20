import css from './card.module.scss'
import {useTasks} from "../../../../hooks/tasks/use-task";
import {useNavigate} from "react-router-dom";
import {Button} from "../../../../components/common/buttons/button";
import {IconDelete} from "../../../common/icons/icons-delete";

export const Card = (props) => {

    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
            <span>{props.name}</span>
            <Button className={css['button-delete']} onClick={
                (e) =>
                {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}>
                <IconDelete/>
            </Button>
        </div>
    )
}