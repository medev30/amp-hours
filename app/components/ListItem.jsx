var React = require('react');
// var Hours = require('HoursAPI').getHours();

var ListItem = React.createClass({

    render: function() {
        return (
            <tr className='row'>
              <td> {this.props.name} </td>
              <td> {this.props.mon_hrs} </td>
              <td> <input type='text' size="4" value={this.props.mon_hrs}/></td>
              <td> <input type='text' size="4"/></td>
              <td> {this.props.mon_rec} </td>

              <td> {this.props.tue_hrs} </td>
              <td> {this.props.tue_bon} </td>
              <td> {this.props.tue_rec} </td>

              <td> {this.props.wed_hrs} </td>
              <td> {this.props.wed_bon} </td>
              <td> {this.props.wed_rec} </td>

              <td> {this.props.thu_hrs} </td>
              <td> {this.props.thu_bon} </td>
              <td> {this.props.thu_rec} </td>

              <td> {this.props.fri_hrs} </td>
              <td> {this.props.fri_bon} </td>
              <td> {this.props.fri_rec} </td>

              <td> {this.props.sat_hrs} </td>
              <td> {this.props.sat_bon} </td>
              <td> {this.props.sat_rec} </td>

              <td> {this.props.sun_hrs} </td>
              <td> {this.props.sun_bon} </td>
              <td> {this.props.sun_rec} </td>
            </tr>
        );
    }
});




module.exports = ListItem;

// Another way to pass parameters from child to parent
// {/*<div onClick={this.myFunction.bind(this, id)}>*/}
