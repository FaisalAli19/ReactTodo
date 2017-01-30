var React = require("react");
var ReactDOM = require("react-dom");

//Create Components

var TodoComponent = React.createClass({
    getInitialState: function() {
        return {
            name: "Faisal Ali",
            message: "How you doing?"
        }
    },

    render: function() {
        return (
            <div className="todo-list">
                <h2>{this.state.name}</h2>
                <p>{this.state.message}</p>
                <form>
                    <div>
                        <input type="text" name="name" placeholder="name"/>
                    </div>
                    <div>
                        <input type="text" message="message" placeholder="message"/>
                    </div>
                </form>
            </div>
        );
    }// Render
});

ReactDOM.render(<TodoComponent />, document.getElementById('App'));
