const React = require('react');

const TodoList = require('TodoList');

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
    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;
