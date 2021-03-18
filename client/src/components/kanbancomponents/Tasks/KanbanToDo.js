export default function TaskToDo({ title, isDone = false, onToggleTask, onDeleteTask }) {
    return (
        <section>
            <input type='checkbox' checked={isDone} onChange={onToggleTask} />
            {title}
            <span onClick={onDeleteTask}> &times;</span>
        </section>
    )
}