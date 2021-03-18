import { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';
import TaskToDo from '../Tasks/KanbanToDo';
import KanbanTasksForm from '../Tasks/KanbanTasksForm';
import loadFromLocal from '../lib/loadFromLocal';

export default function KanbanTask() {
    const LOCAL_STORAGE_KEY = 'tasksToBeDone'
    const [taskToDo, setTaskToDo] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []);
    const [openTasks, setOpenTasks] = useState([]);



    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskToDo))
    }, [taskToDo])


    function addTaskToDo(title) {
        const newTaskToDo = { title: title, isDone: false, id: uuid4() };
        setTaskToDo([...taskToDo, newTaskToDo])
    }


    function toggleCheckbox(idToToggle) {
        const newTask = taskToDo.map((task) => {
            if (task.id === idToToggle) {
                task.isDone = !task.isDone;
            }
            return task;
        })
        setTaskToDo(newTask);
    }

    function deleteTaskToDo(idToDelete) {
        const allRemainingTasks = taskToDo.filter(
            (task, id) => task.id !== idToDelete)
        setTaskToDo(allRemainingTasks)
    }

    function deleteAll() {
        setTaskToDo([]);
    }

    function openTasksToDo() {
        const uncheckedTasks = openTasksToDo.filter(
            (task) => task.isDone === false)
        setOpenTasks(uncheckedTasks)
    }
    const tasksToShow = openTasks.length > 0 ? openTasks : taskToDo

    return (
        <SectionInStyle>
            <KanbanTasksForm onCreateTaskToDo={addTaskToDo} />
            {tasksToShow.map(({ title, isDone, id }) =>
                <TaskToDo
                    key={id}
                    title={title}
                    isDone={isDone}
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTaskToDo(id)} />
            )}
            <button onClick={deleteAll}>delete all tasks
            </button>
            <button filterItems={openTasksToDo}>show my open tasks</button>
        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid black;
`

