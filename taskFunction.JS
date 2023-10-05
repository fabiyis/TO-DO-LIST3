export function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}
export function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}