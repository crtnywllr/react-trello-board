import React from 'react' // This is es6 way of require module
import ReactDOM from 'react-dom'

const {
  Component
} = React



// Functional stateless component - noticed that it don't need render function
const Input = (props) => <input placeholder="Add Card" onChange={props.onChange} />

class Card extends Component {
  render() {
    const { card } = this.props
    const cardStyle = {
      border: '1px solid #000',
      fontStyle: 'italic',
      paddingBottom: '0.5rem'
    }
    return (
      <div style={cardStyle}>{card}</div>
    )
  }
}

class List extends Component {
  render() {
    const listStyle = {
      textAlign: 'center',
      paddingBottom: '1rem',
      border: '5px solid #c0c0c0'
    }
    let cardDisplay = []
    const { list, cards } = this.props
    cards.forEach((card, i) => {
      cardDisplay.push(<Card card={cards[i].card} key={cards[i].cardId} />)
    })
    return (
      <div style={ listStyle }> 
        <h3>{list}</h3>
        {cardDisplay}
        <Input />
      </div>);
  }
}

class Board extends Component {
  render() {
    const boardStyle = {
      border: '5px dashed #000'
    }
    let rows = []
    let lastShownTitle = null
    const { data, onChange } = this.props // Notice that I am passing in function from BoardContainer
    data.forEach((el, i) => {
      const { lists } = el
      lists.forEach((list, i) => {
        if (lists[i].title !== lastShownTitle) {
          rows.push(<List list={lists[i].title} cards={lists[i].cards} key={lists[i].listId} />)
        }
      })
      lastShownTitle = lists[i].title;
    })
    return (
      <div style= { boardStyle } className="board"> 
        {rows}
      </div>
    )
  }
}

class BoardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputChanged: false
    }
  }
  onChange() {
    this.setState({
        inputChanged: !this.state.inputChanged
      }) // Changed name of function
  }
  render() {
    return (
      <div className="boardContainer">
      <Board data={this.props.data} onChange={this.onChange} />
        {this.state.inputChanged}
      </div>
    )
  }
}

const DATA = [{
  title: "Board Title",
  lists: [{
    title: "Ideas",
    listId: 1,
    cards: [{
      cardId: 1,
      card: "Do this thing"
    }, {
      cardId: 2,
      card: 'Make that'
    }, {
      cardId: 3,
      card: 'Should work'
    }, ]
  }, {
    title: "To Do",
    listId: 2,
    cards: [{
      cardId: 4,
      card: "Figure out React"
    }, {
      cardId: 5,
      card: 'Meal plan'
    }, {
      cardId: 6,
      card: 'Grocery shopping'
    }]
  }]
}]

ReactDOM.render(<BoardContainer data={DATA} />, document.getElementById('app'))