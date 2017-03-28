const React = require('react');
const uuid = require('node-uuid');

const AddTodo = require('AddTodo');
const TodoList = require('TodoList');
const TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: uuid(),
                    text: "Take a Walk"
                },
                {
                    id: uuid(),
                    text: "Bring cheese"
                },
                {
                    id: uuid(),
                    text: "Competed React Todo App"
                }
            ],
            showCompleted: false,
            searchText: ""
        }
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
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
