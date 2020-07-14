import React, {useContext} from 'react'

import {TaskListContext} from '../context/TaskListContext';


function Task({task,levelUp}) {

    const {removeTask} = useContext(TaskListContext);
    


    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
                
                <button onClick={() => levelUp(removeTask(task.id))} className="btn-complete task-btn">
                    <i className="fas fa-check-square"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
