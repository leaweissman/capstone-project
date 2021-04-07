import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScrumTaskHeadline from '../ScrumTasks/ScrumTaskHeadline';
import ScrumTaskForm from '../ScrumTasks/ScrumTaskForm';

export default function ScrumTask({ addTask, issue, updateTaskForIssue, issues, updateIssues, showScrumForm, showDelete, showCheckbox }) {


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
                    showDelete={showDelete}
                    showCheckbox={showCheckbox}
                    onToggleTask={() => toggleCheckbox(id)}
                    onDeleteTask={() => deleteTask(id)} />
            )}
            {showScrumForm && <ScrumTaskForm issue={issue} submitTask={addTask} />}

            <ButtonInStyle onClick={deleteAll}>
                delete all tasks
            </ButtonInStyle>

        </SectionInStyle>
    )
}

ScrumTask.propTypes = {
    addTask: PropTypes.func,
    updateTaskForIssue: PropTypes.func,
    updateIssues: PropTypes.func,
}
const SectionInStyle = styled.section`
background-color:#B6CE91;
border-radius: 1rem;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
const HeadingInStyle = styled.p`
margin: .5;
text-align:left;
padding-left: .5rem;
padding-top: .5rem;
`
const ButtonInStyle = styled.button`
color: #3C591E;
background-color:#B6CE91;
border-radius: .5rem;
border-color:#3C591E;
margin: .5rem;`