import { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import loadFromLocal from '../lib/loadFromLocal';
import styled from 'styled-components';
import KanbanIssues from '../Issues/KanbanIssues';


export default function Column({ column, onDeleteMyColumn, issues, setIssues, onAddIssueToColumn, updateColumns }) {
    const LOCAL_STORAGE_KEY = 'tasksToBeDone'
    const [tasks, setTasks] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    function addTask(issueId, task) {
        const newTask = { title: task.title, isDone: false, id: uuid4() };
        setTasks([...tasks, newTask])
        addTaskToIssue(issueId, newTask)
    }

    function addTaskToIssue(issueId, task) {
        const updatedIssues = issues.map(issue => {
            if (issue.id === issueId) {
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
                    setTasks={setTasks}
                    setIssues={setIssues}
                    onAddIssueToColumn={onAddIssueToColumn}
                    updateColumns={updateColumns}
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
