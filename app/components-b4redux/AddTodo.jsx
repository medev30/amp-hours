var React = require('react');

var AddTodo = React.createClass({
    // var {onSubmit} = this.props;
    onSubmit: function (e) {
        e.preventDefault();

        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            // put focus back to input field
            this.refs.todoText.focus();
        }
    },

    render: function() {
        return (
            <div className='container__footer'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' ref='todoText' placeholder='What do you need to do?'/>
                    <button className='button expanded'>Add Todo</button>
                </form>

            </div>
        );
    }

});

module.exports = AddTodo;
