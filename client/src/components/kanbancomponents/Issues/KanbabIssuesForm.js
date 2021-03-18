export default function KanbanIssueForm({ onCreateIssueToDo }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.title;
        onCreateIssueToDo(input.value);

    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>add Issue Name</h3>
            <input
                name='title'
                type='text'
                placeholder='Anything else to do?' />
            <button>Add task</button>
        </form>
    )
}