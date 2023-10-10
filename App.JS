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