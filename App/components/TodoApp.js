const React = require('react');

const AddTodo = require('AddTodo');
const TodoList = require('TodoList');
const TodoSearch = require('TodoSearch');

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
            ],
            showCompleted: false,
            searchText: ""
        }
    },
    handleAddTodo: function(text) {
        alert(`New Todo: ${text}`);
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var { todos } = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
