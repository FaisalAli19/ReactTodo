const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe("TodoList", () => {
    it("should exist", () => {
        expect(TodoList).toExist();
    });

    it("should render one todo component for each todo items", () => {
        var todos = [
            {
                id: 1,
                text: "Start"
            },
            {
                id: 2,
                text: "Stop"
            },
            {
                id: 3,
                text: "Pause"
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it("should render empty message if no todos", () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find(".container__message").length).toBe(1);
    });
});
