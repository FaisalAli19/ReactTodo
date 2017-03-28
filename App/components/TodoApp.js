const React = require('react');
const uuid = require('node-uuid');

const AddTodo = require('AddTodo');
const TodoApi = require('TodoApi');
const TodoList = require('TodoList');
const TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: TodoApi.getTodos(),
            showCompleted: false,
            searchText: ""
        }
    },
    componentDidUpdate: function() {
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        })
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function() {
        var { todos, showCompleted, searchText } = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
