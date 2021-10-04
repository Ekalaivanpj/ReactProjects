import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
    <div className='ui comments'>
        <div className='comment'>
            <a href='\' className='avatar'>
                <img alt="Avatar" />
            </a>
            <div className="content">
                <a href="\" className="author">
                    sam
                </a>
                <div className="metadata">
                    <span className="data">Today at 6:00 PM</span>
                </div>
                <div className="text"> This is my blog!</div>
            </div>
        </div>
    </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));
