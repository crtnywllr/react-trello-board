var React = require('react');
var ReactDOM = require('react-dom');

var List = React.createClass({
  render: function() {
    return (<div className="list">
    {this.props.list}
    </div>);
  }
});

var Card = React.createClass({
  render: function() {
       return (
       <div className="card">{this.props.data.card}</div>
    );
  }
});

var Board = React.createClass({
  render: function() {
    var rows = [];
    var lastList = null;
    this.props.data.forEach(function(data) {
     // if (data.list !== lastList) {
        rows.push(<List list={data.list} key={data.list} />);
     // }
      rows.push(<Card data={data} key={data.card} />);
     // lastList = data.list;
    });
    return (
      <div className="board">
        {rows}
        </div>
    );
  }
});

var BoardContainer = React.createClass({
  render: function() {
    return (
      <div className="boardContainer">
        <Board data={this.props.data} />
      </div>
    );
  }
});


var DATA = [
  {list: 'Ideas', card: 'Do this'},
  {list: 'Ideas', card: 'Make that'},
  {list: 'Ideas', card: 'Should work'},
  {list: 'To Do', card: 'Shower'},
  {list: 'To Do', card: 'Groceries'},
  {list: 'To Do', card: 'Clean'}
];
 
ReactDOM.render(
  <BoardContainer data={DATA} />,
  document.getElementById('app')
  );