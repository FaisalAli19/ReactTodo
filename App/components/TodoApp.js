const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Take a Walk"
                },
                {
                    id: 2,
                    text: "Bring cheese"
                },
                {
                    id: 3,
                    text: "Competed React Todo App"
                }
            ]
        }
    },
    handleAddTodo: function(text) {
        alert(`New Todo: ${text}`);
    },
    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
