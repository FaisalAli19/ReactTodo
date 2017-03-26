const React = require('react');
const ReactDOM = require('react-dom');

//Components
const TodoApp = require('TodoApp');

//foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

//css
require("style-loader!css-loader!sass-loader!./styles/app.scss");

const App = document.getElementById("app");

ReactDOM.render(
    <TodoApp />,
    App
);
