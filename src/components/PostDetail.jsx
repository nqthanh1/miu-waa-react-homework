import React from "react";

function PostDetail({ post, onEdit, onDelete }) {
    if (!post) return null;

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full border border-gray-300 m-2">
            <p className="text-lg font-bold">Id: {post.Id}</p>
            <p className="text-lg mt-2"><span className="font-bold">Title:</span> {post.Title}</p>
            <p className="text-lg mt-2"><span className="font-bold">Author:</span> {post.Author}</p>
            <div className="mt-4 flex justify-end">
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2"
                    onClick={() => onEdit(post)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => onDelete(post)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default PostDetail;