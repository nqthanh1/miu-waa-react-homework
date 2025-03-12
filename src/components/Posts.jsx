import React, { useEffect } from "react";
import Post from "./Post";

function Posts({posts,onClick,onNew}) { 
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {posts.map((post) => (
                <Post key={post.id} post={post} onClick={onClick} />
            ))}
            <Post post={ null} onClick={onNew} ></Post>
        </div>
    );
}

export default Posts;