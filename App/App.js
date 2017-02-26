const React = require('react');
const ReactDOM = require('react-dom');

var HelloReact = React.createClass({
    render: function() {
        return (
            <h1>Hello React</h1>
        );
    }
});

const App = document.getElementById("app");

ReactDOM.render(
    <HelloReact />,
    App
);
