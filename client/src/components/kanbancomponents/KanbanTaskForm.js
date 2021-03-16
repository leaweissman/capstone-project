import KanbanTask from '../kanbancomponents/KanbanTask';

export default function TaskToDO() {
    return (
        <>
            <input
                type='text'
                name='issue_name'
                placeholder='Issue Name'
                onChange={handleChange}
                value={column.issue_name} />
            <p>add your tasks</p>
            <input
                type='text'
                name='task'
                placeholder='add your task'
                onChange={handleChange}
                value={column.tasks} />
            <button>add to task list!</button>
            <KanbanTask title="create a Task" isDone="false" />
            {kanbanTaskToDo.map((kanbanTask) => (
                <kanbanTask
                    title={kanbanTaskToDo.title}
                    isDone={kanbanTaskToDo.isDone}
                ></kanbanTask>
            ))}
        </>
    )
}