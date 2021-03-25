import styled from 'styled-components';
import Task from './Task';
import KanbanTasksForm from '../Tasks/KanbanTasksForm';

export default function KanbanTask({ setTasks, addTask, issue, task, updateTaskForIssue, issues, updateIssues }) {


    function toggleCheckbox(idToToggle) {
        const newTask = issue.tasks.map((task) => {
            if (task.id === idToToggle) {
                task.isDone = !task.isDone;
            }
            return task
        })
        setTasks(newTask)
        updateTaskForIssue(newTask, issue.id)
    }

    function deleteTask(idToDelete) {
        const allRemainingTasks = issue.tasks.filter(
            (task) => task.id !== idToDelete)
        issues.task = allRemainingTasks
        setTasks(allRemainingTasks)
        updateIssues(issue.id, allRemainingTasks)
    }



    function deleteAll() {
        setTasks([]);
    }


    return (
        <SectionInStyle>
            <HeadingInStyle>My Tasks: </HeadingInStyle>
            {issue?.tasks?.map(({ title, isDone, id }) =>
                <Task
                    key={id}
                    title={title}
                    isDone={isDone}
                    task={task}
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTask(id)} />
            )}
            <KanbanTasksForm issue={issue} submitTask={addTask} />

            <button onClick={deleteAll}>
                delete all tasks
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
