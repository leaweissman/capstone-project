export default function IssueToDo({ title, isDone = false, onToggleIssue, onDeleteIssue }) {
    return (
        <section>
            <section>
                {title}
            </section>
            <span onClick={onDeleteIssue}> &times;</span>
        </section>
    )
}