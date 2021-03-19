import { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import loadFromLocal from '../lib/loadFromLocal';
import styled from 'styled-components';
import KanbanIssues from '../Issues/KanbanIssues';


export default function KanbanCard({ column, onDeleteMyColumn, issueToDo, setIssueToDo, onAddIssueToColumn }) {
    const LOCAL_STORAGE_KEY = 'tasksToBeDone'
    const [taskToDo, setTaskToDo] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskToDo))
    }, [taskToDo])

    function addTaskToDo(title) {
        const newTaskToDo = { title: title, isDone: false, id: uuid4() };
        setTaskToDo([...taskToDo, newTaskToDo])
    }

    function addTaskToIssue(issueName, task) {
        console.log(issueName)
        const taskToUpdate = issueToDo.find(issue => issue.task_name === issueName)
        taskToUpdate.tasks.push(taskToDo)
        setIssueToDo([...issueToDo, taskToUpdate])
    }

    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <button onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</button>
            <section>
                <KanbanIssues
                    column={column}
                    issueToDo={issueToDo}
                    setIssueToDo={setIssueToDo}
                    onAddIssueToColumn={onAddIssueToColumn}
                    addTaskToDo={addTaskToDo}
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


