export default function KanbanTask({ title, isDone }) {
    return (
        <section>
            <input type='checkbox'
                checked={isDone} />
            {title}
        </section>
    )

}