var React = require('react');
var CardList = require('./CardList')

var Board = React.createClass({
     render: function(){
         return(
             <div>
                <h1>{this.props.title} </h1>  
                <ul>
                {this.props.lists.map((list, listIndex) => 
                    <li key={listIndex}>
                        {list.title}
                        <button onClick={this.props.deleteList} value={listIndex}> X </button>
                        <CardList list={list} cards={list.cards} deleteCard={this.props.deleteCard.bind(null, listIndex)} addCard={this.props.addCard.bind(null, listIndex)} onChange={this.props.onChange} input={this.props.input}/>
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
 
 module.exports = Board;