var React = require('react');
var ListItem = require('ListItem');
var HoursAPI = require('HoursAPI');



var List = React.createClass({
    render: function() {
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    },

    renderTable: function () {
        var hours = HoursAPI.getHours();

        var renderList = hours.map( (item, index) => {
            return <ListItem key={index} {...item}/>;
        });

        return (
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
                </tr>
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
              </thead>
              <tbody>
                {renderList}

              </tbody>
            </table>
        );
    }


// console.log('render', props);

});

module.exports = List;
