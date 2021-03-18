import { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';

import IssueToDo from '../Issues/KanbanSingleIssue';
import KanbanIssueForm from '../Issues/KanbabIssuesForm';
import loadFromLocal from '../lib/loadFromLocal';
import KanbanTask from '../Tasks/KanbanTask';

export default function KanbanIssues() {
    const LOCAL_STORAGE_KEY = 'issueToBeDone'
    const [issueToDo, setIssueToDo] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []);
    const [openIssue, setOpenIssue] = useState([]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(issueToDo))
    }, [issueToDo])


    function addIssueToDo(title) {
        const newIssueToDo = { title: title, isDone: false, id: uuid4() };
        setIssueToDo([...issueToDo, newIssueToDo])
    }

    function deleteIssueToDo(idToDelete) {
        const allRemainingIssue = issueToDo.filter(
            (issue, id) => issue.id !== idToDelete)
        setIssueToDo(allRemainingIssue)
    }

    const issuesToShow = openIssue.length > 0 ? openIssue : issueToDo

    return (
        <SectionInStyle>
            {issuesToShow.map(({ title, id }) =>
                <span>
                    <IssueToDo
                        key={id}
                        title={title}
                        onDeleteIssue={() => deleteIssueToDo(id)} />
                    <KanbanTask />
                </span>
            )}
            <KanbanIssueForm onCreateIssueToDo={addIssueToDo} />


        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid black;
`

