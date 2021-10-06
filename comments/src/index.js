import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const App = () => {
    return(
        <div className='ui comments'>
            <CommentDetails author="sam" time="10 min ago" comment="hi my name is sam" img={faker.image.avatar()}/>
            <CommentDetails author="eka" time="20 min ago" comment="hi sam i am eka" img={faker.image.avatar()}/>
            <CommentDetails author="pandian"time="30 min ago" comment="hi folks how r u?" img={faker.image.avatar()}/>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));
