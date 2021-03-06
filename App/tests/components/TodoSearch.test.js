const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe("TodoSearch", () => {
    it("should exist", () => {
        expect(TodoSearch).toExist();
    });

    it("should call onSearch with entered input text", () => {
        var searchText = "dog";
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, "dog");
    });

    it("should call onSearch with proper checked value", () => {
        var spy = expect.createSpy();
        var todoChecked = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoChecked.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoChecked.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, "");
    })
});
