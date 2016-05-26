var React = require('react');

var CardForm = React.createClass({
    onSubmit: function(event) {
        event.preventDefault();
        this.props.addCard(this.refs.cardInput.value);
        //React.findDOMNode(this.refs.cardInput).value = ""
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref='cardInput' />
                <button>Add card</button>
            </form>
        );
    }
});

module.exports = CardForm;