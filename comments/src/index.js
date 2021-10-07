import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className='ui comments'>
            <ApprovalCard>
            <CommentDetails 
                author="sam" 
                time="10 min ago" 
                comment="hi my name is sam" 
                img={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails 
                author="eka" 
                time="20 min ago" 
                comment="hi sam i am eka" 
                img={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetails 
                author="pandian" 
                time="30 min ago" 
                comment="hi folks how r u?" 
                img={faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("root"));
