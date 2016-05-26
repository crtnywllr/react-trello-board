var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');
var Board = require('./components/Board')

var TrelloAppContainer = React.createClass({
    getInitialState: function(){
        return {
            title: 'Board 1',
            lists: [{
                title: "List 1",
                input: '',
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



    addCard:function (index, input){
        //console.log(input)
        var lists = this.state.lists.concat();
        lists[index] = {
            title: lists[index].title,
            cards: lists[index].cards.concat(input),
            input: ""
        };
        this.setState({
            lists: lists,
            input: ''
        });
    },
    
     addList:function (e){
        var newState = update(this.state, {
            lists: {$push: [{ title: this.state.input, cards: [], input: "" }]},
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