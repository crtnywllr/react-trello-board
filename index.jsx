var React = require('react');
var ReactDOM = require('react-dom');

var Card1 = function() {
    var content = 'My big idea';
    return (
        <div className="card">
            <div className="card-content">{content}</div>
        </div>
    );
};
var Card2 = function() {
    var content = 'Do this!';
    return (
        <div className="card">
            <div className="card-content">{content}</div>
        </div>
    );
};
var Card3 = function() {
    var content = 'Don\'t forget';
    return (
        <div className="card">
            <div className="card-content">{content}</div>
        </div>
    );
};

var List1 = function () {
    //var cards = [Card1, Card2, Card3];
    return (
        <div className="list">
       <Card1 />
       <Card2 />
       <Card3 />
        </div>
        );
};
var List2 = function () {
    //var cards = [Card1, Card2, Card3];
    return (
        <div className="list">
       <Card3 />
       <Card3 />
       <Card3 />
        </div>
        );
};
var List3 = function () {
    //var cards = [Card1, Card2, Card3];
    return (
        <div className="list">
        <Card3 />
       <Card1 />
       <Card2 />
       
        </div>
        );
};

var Board = function () {
    return (
        <div className="board">
        <List1 />
        <List2 />
        <List3 />
        </div>
        
        )
}

var DATA = {
    title: "Board Title", 
    lists: [
        {
        title: "List 1 Title", 
        cards: ["Card 1", "Card 2", "Card 3"]
        }, 
        {
        title: "List 2 Title", 
        cards: ["Card 1", "Card 2", "Card 3"]
        }
    ]
}
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});