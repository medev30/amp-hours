var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    header: () => {
        return (
            <rrr>
                <td className='ddd'>Hrs2</td>
                <td className='ddd'>Bon1</td>
                <td className='ddd'>Rec3</td>
            </rrr>
        );
    },

    render: function() {
        var {todos} = this.props;

        // var renderTodos = () => {
        //     if (todos.length === 0) {
        //         return (
        //             <p className='container__message'>Nothing To Do</p>
        //         );
        //     }
        //     return todos.map( (todo, index) => {
        //         return <Todo key={index} {...todo} onToggle={this.props.onToggle}/>
        //     });
        // };

        // Alternative
        // var renderTodos = todos.map( (todo, index) => {
        //     return <Todo key={index} index={index} {...todo} onToggle={this.props.onToggle}/>
        // });

        // var head = <td>Hrs1</td>                    <td>Bon</td>                    <td>Rec</td>;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th colSpan='3'>Monday</th>
                            <th colSpan='3'>Tuesday</th>
                            <th colSpan='3'>Wednesday</th>
                            <th colSpan='3'>Thursday</th>
                            <th colSpan='3'>Friday</th>
                            <th colSpan='3'>Saturday</th>
                            <th colSpan='3'>Sunday</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                            <td>Hrs</td>
                            <td>Bon</td>
                            <td>Rec</td>
                        </tr>
                        <Todo />
                    </tbody>

                </table>
            </div>
        );
    }

});

module.exports = TodoList;
