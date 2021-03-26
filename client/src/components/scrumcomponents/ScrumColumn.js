import { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import loadFromLocal from '../lib/loadFromLocal';
import styled from 'styled-components';
import KanbanIssues from '../Issues/KanbanIssues';


export default function Column({ column, onDeleteMyColumn, issues, setIssues, onAddIssueToColumn, issue }) {
    const LOCAL_STORAGE_KEY_SCRUM_TASKS = 'scrumtasks'
    const [tasks, setTasks] = useState(loadFromLocal(LOCAL_STORAGE_KEY_SCRUM_TASKS) ?? []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_SCRUM_TASKS, JSON.stringify(tasks))
    }, [tasks])

    function addTask(title) {
        const newTask = { title: title, isDone: false, id: uuid4() };
        setTasks([...tasks, newTask])
    }

    function addTaskToIssue(issueName, task) {
        const updatedIssues = issue.map(issue => {
            if (issue.title === issueName) {
                issue.tasks.push(task)
            }
            return issue;
        })
        setIssues(updatedIssues)
    }

    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <button onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</button>
            <section>
                <KanbanIssues
                    column={column}
                    issues={issues}
                    setIssues={setIssues}
                    onAddIssueToColumn={onAddIssueToColumn}
                    addTask={addTask}
                    addTaskToIssue={addTaskToIssue} />
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.div`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`
const ColumnName = styled.h3`
color: var(--primaryblue);
text-align: left;
`


