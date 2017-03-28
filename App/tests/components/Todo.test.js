const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe("Todo", () => {
    it("should exist", () => {
        expect(Todo).toExist();
    });

    it("should on toggle prop on id click", () => {
        var todoData = {
            id: 1999,
            text: "write todo.test.js test",
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(1999);
    });
});
