(function () {
    'use strict';
    
    var taskInput       = document.querySelector('form'),
        todoList        = document.querySelector('ul');

    taskInput.addEventListener('submit', function (event) {
        todoList.innerHTML += taskInput.value;
        event.preventDefault();
    }, false);
}());
    