export default function saveToLocal(key, tasks) {
    localStorage.setItem(key, JSON.stringify(tasks))
}