import css from './column.module.scss';
import Scrollbars from "react-custom-scrollbars-2";
import {useLayout} from "../../../hooks/layout/use-layout";
import {useTasks} from "../../../hooks/tasks/use-task";
import {Card} from "./card/card";
import {useState} from "react";

export const Column = (props) => {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState(false);
    const [inputCardName, setInputCardName] = useState();

    const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(undefined);

    const {mainContentHeight} = useLayout();

    const {getTasksByState, getTasksByExcludedState, addTask, moveTask, removeTask } = useTasks();

    const tasks = getTasksByState(props.state);
    const hasTasks = tasks.length > 0;

    const onInputCard = (e) => {
        if (e.target.value !== "") {
            setInputCardName(e.target.value);
        }
    }

    return (
        <div className={css.column}>
            <div className={css.header}>{props.name}</div>
            <div className={css.wrapper}>
                <div className={css.body}>

                    {hasTasks &&
                    <Scrollbars autoHeightMax={mainContentHeight} autoHide autoHeight>
                        {
                            tasks.map((task) =>
                                <Card key={task.id} id={task.id} name={task.name} onRemove={(id) => {
                                    removeTask(id);
                                }
                                }/>)
                        }
                    </Scrollbars>
                    }

                    {isNewTaskInputShown &&
                    <div>
                        <input className={css.input} onInput={onInputCard} />
                    </div>
                    }

                    {isNewTaskSelectShown &&
                    <select className={css.select} onChange={(e) =>
                        setSelectedTaskId(e.target.value)}
                    >
                        <option></option>
                        {getTasksByExcludedState(props.state).map((task) =>
                            <option key={task.id} value={task.id}>{task.name}</option>
                        )}
                    </select>
                    }
                </div>
                <div className={css.footer}>
                    {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
                    <button className={css['button-add']} onClick={() => props.state === 'backlog'
                        ? setIsNewTaskInputShown(true)
                        : setIsNewTaskSelectShown(true)}
                    >+ Add Card</button>}
                 
                    {(isNewTaskInputShown || isNewTaskSelectShown) &&
                    <button className={css['button-submit']} onClick={() => {
                        if (props.state === 'backlog' && inputCardName !== "") {
                            setIsNewTaskInputShown(false);
                            addTask(inputCardName);
                            setInputCardName(undefined);
                        } else {
                            setIsNewTaskSelectShown(false);
                            moveTask(selectedTaskId, props.state);
                        }
                    }}
                    >Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}