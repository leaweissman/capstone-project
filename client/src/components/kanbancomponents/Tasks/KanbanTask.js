import styled from 'styled-components';
import TaskToDo from '../Tasks/KanbanToDo';
import KanbanTasksForm from '../Tasks/KanbanTasksForm';

export default function KanbanTask({ taskToDo, setTaskToDo, addTaskToDo, issueToDo }) {

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


    return (
        <SectionInStyle>
            <HeadingInStyle>My Tasks: </HeadingInStyle>
            {issueToDo && issueToDo?.taskToDo?.map(({ title, isDone, id }) =>
                <TaskToDo
                    key={id}
                    title={title}
                    isDone={isDone}
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTaskToDo(id)} />
            )}
            <KanbanTasksForm onCreateTaskToDo={addTaskToDo} />

            <button onClick={deleteAll}>delete all tasks
            </button>

        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid white;
`
const HeadingInStyle = styled.p`
margin: .5;
text-align:left;
`
