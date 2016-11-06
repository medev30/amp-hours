var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

    getInitialState: function() {
        return {
            total: 0
        };
    },

    onChange: function (e) {
        var total = e.target.value;
        console.log(e);
        console.log('-------');
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target.value);
        // console.log(e.currentTarget);
        // console.log(e.preventDefault);
// console.log(bon);
        this.setState({
            total: total
        });
    },

    render: function() {
        // var {text, id, completed, createdAt, completedAt} = this.props;

        return (
            <tr>
                <td>Dylan Edge</td>
                <td>5</td>
                <td>0.20</td>
                <td><input size="4" onChange={this.onChange}/></td>
                <td><input size="4"/></td>
                <td><input size="4"/></td>
                <td><input size="4"/></td>
                <td><input size="4"/></td>
                <td className='total'>{this.state.total}</td>

            </tr>

        );
    }

});

module.exports = Todo;

// Another way to pass parameters from child to parent
// {/*<div onClick={this.myFunction.bind(this, id)}>*/}
