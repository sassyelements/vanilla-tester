import VanillaTester from '../plugins/VanillaTester';

const tester = new VanillaTester();

// Using the Form that is already there (on index.html page)
tester.test('Add an item to the todo list', () => {
    const form = document.querySelector('.todo__form');
    form.elements['todo__input'].value = 'Task One';

    const todoList = document.querySelector('.todo__list');

    const event = new Event('submit', {bubbles: true, cancelable: true});
    event.preventDefault();
    form.addEventListener('submit', function() {
        todoList.innerHTML = `<li>${form.elements['todo__input'].value}</li>`
    });
    form.dispatchEvent(event);

    // Assertion
    tester.assert(todoList.innerHTML.toLowerCase().includes('<li>task one</li>'));

    form.elements['todo__input'].value = '';
    todoList.innerHTML = '';
});

// Test DOM -- Todo form. This test requires an extra test html file (vanillaTester.html)
/*
tester.test('Add an item to the todo list', () => {
    const parentElem = document.querySelector('.todo__container');
    parentElem.innerHTML = `
        <form class="todo__form">
            <input type="text" name="todo__input">
            <button type="submit">Submit</button>
        </form>
        <ul class="todo__list"></ul>
    `;

    const form = document.querySelector('.todo__form');
    form.elements['todo__input'].value = 'Task One';

    const event = new Event('submit', {bubbles: true, cancelable: true});
    event.preventDefault();
    form.addEventListener('submit', function() {
        const todoList = document.querySelector('.todo__list');
        todoList.innerHTML = `<li>${form.elements['todo__input'].value}</li>`
    });
    form.dispatchEvent(event);

    // Assertion
    tester.assert(parentElem.innerHTML.toLowerCase().includes('<li>task one</li>'));

    parentElem.innerHTML = '';
});
*/
