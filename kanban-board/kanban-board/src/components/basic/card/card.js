import css from './card.module.scss';
import {useParams, useNavigate} from 'react-router-dom'
import {Button} from "../../common/buttons/button";
import {IconDelete} from "../../common/icons/icons-delete";
import {useTasks} from "../../../hooks/tasks/use-task";
import {useEffect, useState} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { IconConfirm } from "../../common/icons/icons-confirm";
import {css as cssColumn} from '../column/column.module.scss';


export const Card = () => {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();

    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId])

    const navigateBack = () => navigate(-1);

    return (
        <div className={css.card}>
            {task &&
            <div  className={css.body}>
                <textarea className={css.name}
                          value={task.name}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  name: e.target.value
                              })}
                />
                <textarea className={css.description}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  description: e.target.value
                              })}
                          value={task.description}

                />
            </div>
            }
            <Button className={css['button-close']} onClick={navigateBack}>
                <IconDelete/>
            </Button>
            <div className={css.footer}>
                <button className={css['button-save']} onClick={() => {
                    updateTask(task);
                    navigateBack();
                }}>Save Card</button>
            </div>
        </div>
    )
}