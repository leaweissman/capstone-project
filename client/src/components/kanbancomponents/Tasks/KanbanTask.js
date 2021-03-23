import styled from 'styled-components';
import Task from './Task';
import KanbanTasksForm from '../Tasks/KanbanTasksForm';

export default function KanbanTask({ setTasks, addTask, issue }) {


    function toggleCheckbox(idToToggle) {
        const newTask = issue.tasks.map((task) => {
            if (task.id === idToToggle) {
                task.isDone = !task.isDone;
            }
            return task;
        })
        // setTasks(newTask);
        // updateTaskForIssue(task, issueId)

        // oben:
        /**
         * 
         * function updateTaskForIssue(taskToUpdate, issueId) {
         * const updatedIssues = issues.map(issue => {
         *  if (issue.id === issueId) {
         *      issue.tasks = issue.tasks.map(task => {
         *         if (task.id === taskToUpdate.id) {
         *          task.isDone = taskToUpdate.isDone
         *         } 
         *          return task;
         *      });
         * 
         *      return issue;
         *  }
         * })
         * setIssues(updatedIssues)
         */
    }

    function deleteTask(idToDelete) {
        const allRemainingTasks = issue.tasks.filter(
            (task, id) => task.id !== idToDelete)
        setTasks(allRemainingTasks)
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
