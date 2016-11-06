var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    // called after the props or state is changed
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    onAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: null
                }
            ]
        })
    },
    onToggle: function (id) {
        var updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : null;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    onSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className='page-title'>AMS hours</h1>
                {/*<div className='row'>
                    <div className='column small-centered small-11 medium-6 large-5'>*/}
                        <div className='container'>
                            {/*<TodoSearch onSearch={this.onSearch} />*/}
                            <TodoList todos={filteredTodos} onToggle={this.onToggle}/>
                            {/*<AddTodo onAddTodo={this.onAddTodo} />*/}
                        </div>
                    {/*</div>
                </div>*/}
            </div>
        );
    }

});

module.exports = TodoApp;