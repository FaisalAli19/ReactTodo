const React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var newTodo = this.refs.todo.value;


        if(newTodo.length > 0){
            this.refs.todo.value = "";
            this.props.onAddTodo(newTodo);
        }else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todos" ref="todo" placeholder="What you need to do?"/>
                    <button type="submit" className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
