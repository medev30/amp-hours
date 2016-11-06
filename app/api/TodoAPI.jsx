var $ = require('jQuery');
// instead of jQuery this can be used =>
// Array.isArray(todos)

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            // save our todos array in the browser storage under the name 'todos'. Array is converted to string.
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
        // if todos is invalid - 'undefined' is returned by default
    },
    getTodos: function () {
        // get all items saved in the browser under the name 'todos'
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            // convert string to array. If it fails then catch will run
            todos = JSON.parse(stringTodos);
        } catch (e) {
            // runs if error -> nothing to run here
        }
        // check if array (not an object or something)
        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            // if true, the item will stay in the array
            return !todo.completed || showCompleted;
        });

        // filter by searchText  // if true, the item will stay in the array
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

            // if searchText == 0 -> return all items, or only where searchText is found
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        // if return -1 -> A comes before B, if return 1 - B first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {  // a = false and b = true
                return -1;
            } else if (a.completed && !b.completed) {   // a = true and b = false
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};

// Sorting
// The comparison function compares two values and returns a number.
//
// If it returns a negative number, a will be sorted to a lower index in the array.
// If it returns a positive number, a will be sorted to a higher index.
// And if it returns 0 no sorting is necessary.
// When you pass sort a comparison function, that function will be called repeatedly and given different values from the array until the array has been completely sorted.


//
// todos: [
//     {
//         id: uuid(),
//         text: 'Walk the dog',
//         completed: false
//     }, {
//         id: uuid(),
//         text: 'Clean the dog',
//         completed: true
//     }, {
//         id: uuid(),
//         text: 'Walk the cat',
//         completed: true
//     }, {
//         id: uuid(),
//         text: 'Learn React',
//         completed: false
//     }
// ]
