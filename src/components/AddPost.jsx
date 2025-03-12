import React, { useState } from "react";

function AddPost({ onAdd }) {
    const [newPost, setNewPost] = useState({ title: "", content: "", author: "" });

    const handleAddPost = () => {
        onAdd(newPost);
        setNewPost({ title: "", content: "", author: "" });
    };

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full border border-gray-300 m-2">
            <p className="text-lg mt-2"><span className="font-bold">Title:</span>
                <input
                    type="text"
                    className="bg-white text-black border border-gray-300"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                /></p>
            <p className="text-lg mt-2"><span className="font-bold">Content:</span>
                <textarea
                    placeholder="Content"
                    className="bg-white text-black border border-gray-300"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                ></textarea>
            </p>
            <p className="text-lg mt-2"><span className="font-bold">Author:</span>
                <input
                    type="text"
                    placeholder="Author"
                    className="bg-white text-black border border-gray-300"
                    value={newPost.author}
                    onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                />
            </p>
            
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2" onClick={handleAddPost}>Add Post</button>
        </div>
    );
}

export default AddPost;
