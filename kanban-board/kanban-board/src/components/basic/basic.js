import {Column} from "./column/column";
import css from './basic.module.scss';
import {useTasks} from "../../hooks/tasks/use-task";

export const Basic = () => {
    const {states} = useTasks();

    return (
        <div className={css.basic}>
            {states.map(
                (state) =>
                    <Column key={state.id} name={state.name} state={state.state}/>
            )}
        </div>
    )
}