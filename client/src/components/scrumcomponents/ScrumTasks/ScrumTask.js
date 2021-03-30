import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScrumTaskHeadline from '../ScrumTasks/ScrumTaskHeadline';
import ScrumTaskForm from '../ScrumTasks/ScrumTaskForm';

export default function ScrumTask({ addTask, issue, updateTaskForIssue, issues, updateIssues, showScrumForm }) {


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
                <ScrumTaskHeadline
                    key={id}
                    title={title}
                    isDone={isDone}
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTask(id)} />
            )}
            {showScrumForm && <ScrumTaskForm issue={issue} submitTask={addTask} />}

            <button onClick={deleteAll}>
                delete all tasks
            </button>

        </SectionInStyle>
    )
}

ScrumTask.propTypes = {
    addTask: PropTypes.func,
    issue: PropTypes.object,
    updateTaskForIssue: PropTypes.func,
    issues: PropTypes.object,
    updateIssues: PropTypes.func,
}
const SectionInStyle = styled.section`
border: 2px solid white;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
const HeadingInStyle = styled.p`
margin: .5;
text-align:left;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
