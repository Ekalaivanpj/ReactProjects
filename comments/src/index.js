import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';

const App = () => {
    return(
        <div className='ui comments'>
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));
