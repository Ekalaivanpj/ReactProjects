import React from 'react';
import faker from 'faker';

const CommentDetails = () => {
    return(
        <div className='comment'>
            <a href='\' className='avatar'>
                <img alt="Avatar" src={faker.image.avatar()}/>
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
    );
}
export default CommentDetails;