var React = require('react');
var Row = require('Row');
var HoursAPI = require('HoursAPI');



var Table = React.createClass({
    getInitialState: function () {
      return {
         table: HoursAPI.getHours()
      };
    },

    onChange: function(i, input, val) {
      var updatedTable = this.state.table;
      updatedTable[i][input] = val;

      this.setState({ table: updatedTable });
    },

    renderTable: function () {

        var renderRows = this.state.table.map( (row, index) => {
            return <Row key={index} index={index} {...row} onChange={this.onChange}/>;
        });

        return (
            <table>
              <thead>
                <tr className='row'>
                  <th>Name</th>
                  <th colSpan='3'>Monday</th>
                  <th colSpan='3'>Tuesday</th>
                  <th colSpan='3'>Wednesday</th>
                  <th colSpan='3'>Thursday</th>
                  <th colSpan='3'>Friday</th>
                  <th colSpan='3'>Saturday</th>
                  <th colSpan='3'>Sunday</th>
                  <th colSpan='3'>Total</th>
                </tr>
                <tr className='row'>
                  <td>as</td>
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
                  {/*--- Total --- */}
                  <td>Hrs</td>
                  <td>Bon</td>
                  <td>Rec</td>
                </tr>
              </thead>
              <tbody>
                {renderRows}

              </tbody>
            </table>
        );
    },

    render: function() {
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    }

});

module.exports = Table;
