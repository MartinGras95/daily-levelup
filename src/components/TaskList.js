import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext';

import Task from './Task';

const TaskList = (props) => {
    const {tasks} = useContext(TaskListContext);

    return (
        <div>
        {/* check if tasks exists, if true then display tasks
        if not then display No Tasks*/}
        {tasks.length ? (
            <ul className="list">
            {tasks.map((task) => {
                return <Task levelUp={props.levelUp} task={task} key={task.id}/>
            })}
           </ul>
        ): (
            <div className="no-tasks">No Tasks
            
            </div>
        )}

        </div>
    )
}

export default TaskList
