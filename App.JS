const taskModule = (function () {
    const tasks = [];

    function addTask(taskText) {
        tasks.push({ text: taskText, completed: false });
    }

    function removeTask(index) {
        tasks.splice(index, 1);
    }

    function toggleTaskStatus(index) {
        tasks[index].completed = !tasks[index].completed;
    }

    return {
        getTasks: () => tasks,
        addTask,
        removeTask,
        toggleTaskStatus,
    };
})();

const uiModule = (function () {
    const taskList = document.getElementById('taskList');

    function clearInput() {
        document.getElementById('taskInput').value = '';
    }

    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button class="toggleBtn">Toggle</button>
                <button class="removeBtn">Remove</button>
            `;
            li.querySelector('.toggleBtn').addEventListener('click', () => toggleTask(index));
            li.querySelector('.removeBtn').addEventListener('click', () => removeTask(index));
            taskList.appendChild(li);
        });
    }

    return {
        clearInput,
        renderTasks,
    };
})();

const controllerModule = (function (task, ui) {
    function init() {
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', addNewTask);
        ui.renderTasks(task.getTasks());
    }

    function addNewTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            task.addTask(taskText);
            taskInput.value = '';
            ui.clearInput();
            ui.renderTasks(task.getTasks());
        }
    }

    function toggleTask(index) {
        task.toggleTaskStatus(index);
        ui.renderTasks(task.getTasks());
    }

    function removeTask(index) {
        task.removeTask(index);
        ui.renderTasks(task.getTasks());
    }

    return {
        init,
    };
})(taskModule, uiModule);
controllerModule.init();






