import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// create context
export const TaskListContext = createContext();

const TaskListContextProvider = props => {

    // State
    const [tasks, setTasks] = useState([
    ]);

    // Add Task function
    const addTask = (title) => {
        setTasks([...tasks, {title,id:uuidv4()}])
    }

    // Removing tasks
    // filter array, keep tasks which do not equal to the passed id (the one that has been clicked to be deleted)
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    }



    // clear list
    const clearList = () => {

        setTasks([]);
    }



    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList }}>
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;