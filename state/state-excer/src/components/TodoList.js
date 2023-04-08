import { useState } from "react";


function TodoList (){
    const [task, setTask] = useState ('')
    const [taskList, setTaskList] = useState ([])

    const handleClick = () => {
        const newTaskList = taskList
        newTaskList.push(task)
        setTaskList([...newTaskList])
    }

    const deleteHandle = (index) =>{
        const newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);  
    }
    return (
        <div>
            <input 
            value={task}
            onChange={e => setTask(e.target.value)}
            />
            <button onClick={handleClick}>Add Task</button>
            {
                taskList.map((task, index) => <div key={index}>{task}{''} <button onClick={() => deleteHandle(index)}>Delete Task</button></div> )
                
            }
            
        </div>
    )
}

export default TodoList;






/**
 * 03 Todo List
 * Create a todo list application that allows users to add and remove tasks. 
 * Use the useState hook to manage the list of tasks. 
 * Ensure that the list renders correctly as tasks are added and removed.
 * 
 */