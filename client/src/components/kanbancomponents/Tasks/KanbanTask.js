import styled from 'styled-components';
import PropTypes from 'prop-types';
import Task from './Task';
import KanbanTasksForm from '../Tasks/KanbanTasksForm';


export default function KanbanTask({ addTask, issue, updateTaskForIssue, issues, updateIssues, showForm }) {


    function toggleCheckbox(idToToggle) {
        return issue.tasks.map((task) => {
            if (task.id === idToToggle) {
                task.isDone = !task.isDone;
                updateTaskForIssue(task, issue.id)
            }
            return task
        })
    }

    function deleteTask(idToDelete) {
        const allRemainingTasks = issue.tasks.filter(
            (task) => task.id !== idToDelete)
        issues.task = allRemainingTasks
        updateIssues(issue.id, allRemainingTasks)
    }



    function deleteAll() {
        updateIssues(issue.id, [])
    }

    return (
        <SectionInStyle>
            <HeadingInStyle>My Tasks: </HeadingInStyle>
            {issue?.tasks?.map(({ title, isDone, id }) =>
                <Task
                    key={id}
                    title={title}
                    isDone={isDone}
                    showCheckbox
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTask(id)} />
            )}
            {showForm && <KanbanTasksForm issue={issue} submitTask={addTask} />}
            <ButtonInStyle onClick={deleteAll}>
                delete all tasks
            </ButtonInStyle>

        </SectionInStyle>
    )
}

KanbanTask.propTypes = {
    addTask: PropTypes.func,
    updateTaskForIssue: PropTypes.func,
    showForm: PropTypes.func,
    updateIssues: PropTypes.func,

}

const SectionInStyle = styled.section`
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color: #FAB8A4;
border-radius: 2rem;
margin: 1rem;
padding: 1rem;
`
const HeadingInStyle = styled.p`
margin: 20px;
text-align:left;
`

const ButtonInStyle = styled.button`
color: white;
background-color:#D6846B;
border-radius: .5rem;
border-color:#AB3E1D;
padding: .1rem;
margin: 1rem;`
