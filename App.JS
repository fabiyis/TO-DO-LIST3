export { addTask, completeTask, removeTask } from './taskFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementsIds('taskList');
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.ariaValueMax.trim();
        if (taskText !== '') {
            addTask(taskText, taskList)
            taskInput.value = '';
        }
    })
    