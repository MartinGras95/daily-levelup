import React,{useState} from 'react'

import TaskListContextProvider from '../context/TaskListContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import Level from './Level'
import '../App.css';

const App = () => {

    // Level State
    const [level, setLevel] = useState(0);

    // Function to raise level
    const raiseLevel = () => {
        setLevel(level + 5)
    }

    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList levelUp={raiseLevel} />
                    </div>
                </div>

                <Level currentLevel={level}/>

            </div>
        </TaskListContextProvider>
    )
}

export default App
