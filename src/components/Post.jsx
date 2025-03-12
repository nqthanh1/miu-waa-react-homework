import React from "react";


function Post({ post, onClick }) {
    //New
    if (!post) return (
         <div className="bg-white text-black p-4 rounded-lg shadow-lg w-64 border border-gray-300 m-2 cursor-pointer"
        onClick={() => onClick()}>
            New Post
        </div>
    );

    //Existing
    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-64 border border-gray-300 m-2 cursor-pointer"
        onClick={() => onClick(post)}>
            <p className="text-lg font-bold">Id: {post.id}</p>
            <p className="text-lg mt-2"><span className="font-bold">Title:</span> {post.title}</p>
            <p className="text-lg mt-2"><span className="font-bold">Content:</span> {post.content}</p>
            <p className="text-lg mt-2"><span className="font-bold">Author:</span> {post.author}</p>
        </div>
    );
}
export default Post;