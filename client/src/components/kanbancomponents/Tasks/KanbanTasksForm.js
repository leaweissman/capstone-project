export default function KanbanTasksForm({ onCreateTaskToDo }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.title;
        onCreateTaskToDo(input.value);

    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>add further tasks</h3>
            <input
                name='title'
                type='text'
                placeholder='Anything else to do?' />
            <button>Add task</button>
        </form>
    )
}