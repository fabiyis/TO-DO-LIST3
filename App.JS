import { addTask, completeTask, removeTask } from './taskFunctions.js';

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); 
        if (taskText !== '') {
            addTask(taskText, taskList);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('complete-btn')) {
            completeTask(target);
        } else if (target.classList.contains('delete-btn')) { 
            removeTask(target);
        }
    });
});

