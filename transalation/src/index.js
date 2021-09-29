import React from 'react';
import ReactDOM from 'react-dom';

const eka = () => {
    return "Click me!";
}

const App = () => {
    return (
        <div>
            <label className="label">EnterName: </label>
            <input style={{borderColor: 'red'}}/>
            <button style={{backgroundColor: 'green', color: 'white', marginLeft: '5px'}}> {eka()} </button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));