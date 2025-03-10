import React from "react";


function Post({post, onClick }) {
    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-64 border border-gray-300 m-2 cursor-pointer"
        onClick={() => onClick(post)}>
            <p className="text-lg font-bold">Id: {post.Id}</p>
            <p className="text-lg mt-2"><span className="font-bold">Title:</span> {post.Title}</p>
            <p className="text-lg mt-2"><span className="font-bold">Author:</span> {post.Author}</p>
        </div>
    );
}
export default Post;