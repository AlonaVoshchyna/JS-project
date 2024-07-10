document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const checkBtn = document.createElement('button');
            checkBtn.textContent = '✔️';
            checkBtn.addEventListener('click', () => {
                li.classList.toggle('checked');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                todoList.removeChild(li);
            });
            li.appendChild(checkBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

            todoInput.value = '';
            todoInput.focus();
        }
    }
});