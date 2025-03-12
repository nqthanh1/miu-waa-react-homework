import React from 'react';


const Comments = ({ comments}) => {
    return (
        <div>
            <h2 className="text-lg font-bold">Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.commentedBy}:{comment.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;