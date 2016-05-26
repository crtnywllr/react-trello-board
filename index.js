var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var AddCard = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();
        this.props.addCard();
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.props.onChange} type="text" value={this.props.input} />
                <button>Add card</button>
            </form>
        );
    }
});

var CardList = React.createClass({

    render: function(){
    //Display list of all cards
        return ( 
        <div>
            <ul>
                {this.props.cards.map((input, cardIndex) => 
                 <li key={cardIndex}>
                    {input}
                    <button onClick={this.props.deleteCard.bind(null, cardIndex)} value={cardIndex}> X </button>
                 </li>
                )}
            </ul>
            <AddCard onChange={this.props.onChange} addCard={this.props.addCard}/>
        </div>
        );
    }
 });
 
 var Board = React.createClass({
     render: function(){
         return(
             <div>
                <h1>{this.props.title} </h1>  
                <ul>
                    {this.props.lists.map((input, inputIndex) => 
                    <li key={inputIndex}>
                        {input.title}
                        <button onClick={this.props.deleteList} value={inputIndex}> X </button>
                        <CardList cards={input.cards} deleteCard={this.props.deleteCard.bind(null, inputIndex)} addCard={this.props.addCard.bind(null, inputIndex)} onChange={this.props.onChange} input={this.props.input}/>
                    </li>
                   )}
                </ul>
                
                <form onSubmit={this.props.addList}>    
                    <input onChange={this.props.onChange} type="text" value={this.props.input}/> 
                    <button> Add List </button>    
                </form>   
            </div>
             )
     }
 })

var TrelloAppContainer = React.createClass({
    getInitialState: function(){
        return {
            title: 'Board 1',
            lists: [{
                title: "List 1",
                cards: []
            }],
            input: ''
        }
    },
    
    deleteCard: function(listIndex, cardIndex) {
        this.setState(state => {
            state.lists[listIndex].cards.splice(cardIndex, 1);
            return {lists: state.lists};
        });
    },
    
     deleteList: function(e) {
        var inputIndex = parseInt(e.target.value, 10);
        this.setState(state => {
            state.lists.splice(inputIndex, 1);
            return {lists: state.lists};
        });
    },

    onChange: function(e) {
        this.setState({ input: e.target.value });
    },



    addCard:function (index){
        var lists = this.state.lists.concat();
        lists[index] = {
            title: lists[index].title,
            cards: lists[index].cards.concat(this.state.input)
        };
        this.setState({
            lists: lists,
            input: ''
        });
    },
    
     addList:function (e){
        var newState = update(this.state, {
            lists: {$push: [{ title: this.state.input, cards: [] }]},
            input: {$set: ''}
        } );
        
        this.setState(newState)
        e.preventDefault();
    },

    render: function(){ 
        return(
            <Board title={this.state.title} lists= {this.state.lists} cards={this.state.cards} deleteCard={this.deleteCard} deleteList={this.deleteList} addList={this.addList} addCard={this.addCard} onChange={this.onChange} input={this.state.input} />
        );
    }
});
 
ReactDOM.render(<TrelloAppContainer />, document.getElementById('app'));