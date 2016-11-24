var React = require('react');
// var Hours = require('HoursAPI').getHours();

var Row = React.createClass({
    onInputChange: function (e) {

        var val = e.target.value;
        val => 0 ? parseFloat(val) : 0;

        console.log(val);
      // this.props.index  -- row index
      // e.target.name  -- input field name
      this.props.onChange(this.props.index, e.target.name, val)

    },

    render: function() {
        var {fname, row_total,
            mon_hrs, mon_bon, mon_rec,
            tue_hrs, tue_bon, tue_rec,
            wed_hrs, wed_bon, wed_rec,
            thu_hrs, thu_bon, thu_rec,
            fri_hrs, fri_bon, fri_rec,
            sat_hrs, sat_bon, sat_rec,
            sun_hrs, sun_bon, sun_rec
        } = this.props;
        return (
            <tr className='row'>
              <td> {fname} </td>

              <td> <input name='mon_hrs' value={mon_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='mon_bon' value={mon_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='mon_rec' value={mon_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='tue_hrs' value={tue_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='tue_bon' value={tue_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='tue_rec' value={tue_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='wed_hrs' value={wed_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='wed_bon' value={wed_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='wed_rec' value={wed_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='thu_hrs' value={thu_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='thu_bon' value={thu_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='thu_rec' value={thu_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='fri_hrs' value={fri_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='fri_bon' value={fri_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='fri_rec' value={fri_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='sat_hrs' value={sat_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='sat_bon' value={sat_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='sat_rec' value={sat_rec} size='4' onChange={this.onInputChange} /></td>

              <td> <input name='sun_hrs' value={sun_hrs} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='sun_bon' value={sun_bon} size='4' onChange={this.onInputChange} /></td>
              <td> <input name='sun_rec' value={sun_rec} size='4' onChange={this.onInputChange} /></td>

              <td className='total'> {mon_hrs + tue_hrs + wed_hrs + thu_hrs + fri_hrs + sat_hrs + sun_hrs} </td>
              <td className='total'> {mon_bon + tue_bon + wed_bon + thu_bon + fri_bon + sat_bon + sun_bon} </td>
              <td className='total'> {mon_rec + tue_rec + wed_rec + thu_rec + fri_rec + sat_rec + sun_rec} </td>
            </tr>
        );
    }
});




module.exports = Row;

// Another way to pass parameters from child to parent
// {/*<div onClick={this.myFunction.bind(this, id)}>*/}
