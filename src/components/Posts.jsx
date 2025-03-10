import React from "react";
import Post from "./Post";

function Posts({posts,onClick}) { 

    return (
        <div className="flex overflow-x-auto space-x-4 p-4">
            {posts.map((post) => (
                <Post key={post.Id} post={post} onClick={onClick} />
            ))}
        </div>
    );
}

export default Posts;