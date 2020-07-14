import React, {useContext, useState} from 'react'
import {TaskListContext} from '../context/TaskListContext';

function TaskForm() {
    const {addTask, clearList} = useContext(TaskListContext);

    // setting the title of task, default is empty string
    const [title, setTitle] = useState("");

    // the corresponding onChange from input field
    // sets the title of task whenever value is typed in
    const handleChange = e => {
        setTitle(e.target.value)
    };

    // when submit button clicked
    // addTask function is called 
    // And the title is passed
    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    };

    return (

        <form onSubmit={handleSubmit} className="form">
            <input 
            onChange={handleChange}
            value={title}
            type="text"
            className="task-input"
            placeholder="Add task.."
            maxLength="25"
            required
            />

            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task
                </button>
                
                <button onClick={clearList} className="btn clear-btn">Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
