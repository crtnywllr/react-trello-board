var React = require('react');
var CardForm = require('./CardForm')

var CardList = React.createClass({
    onChange: function() {
        console.log("Input changed")
    },

    render: function(){
        
    //Display list of all cards
        return ( 
        <div>
            <ul>
                {this.props.cards.map((card, cardIndex) => 
                 <li key={cardIndex}>
                    {card}
                    <button onClick={this.props.deleteCard.bind(null, cardIndex)} value={cardIndex}> X </button>
                 </li>
                )}
            </ul>
            <CardForm input={this.props.list.input} onChange={this.props.onChange} addCard={this.props.addCard}/>
        </div>
        );
    }
 });
 
 module.exports = CardList;