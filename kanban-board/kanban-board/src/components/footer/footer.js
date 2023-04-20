import css from './footer.module.scss'
import {useTasks} from "../../../src/hooks/tasks/use-task";

export const Footer = (props) => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <div>Active task: {getActiveTaskCount()}</div>
            <div>Finished task: {getFinishedTaskCount()}</div>
            <div>Kanban board by Alexander, 2023</div>
        </footer>
    )
}