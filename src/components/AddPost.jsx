import React, { useRef } from "react";

function AddPost({ onAdd }) {
    const titleRef = useRef();
    const contentRef = useRef();
    const authorRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title: titleRef.current.value,
            content: contentRef.current.value,
            author: authorRef.current.value,
        };
        onAdd(newPost);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text"
                    placeholder="Title"
                    className="bg-white text-black border border-gray-300"
                    ref={titleRef}
                    required />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    placeholder="Content"
                    className="bg-white text-black border border-gray-300"
                    ref={contentRef}
                    required></textarea>
            </div>
            <div>
                <label>Author:</label>
                <input type="text"
                    placeholder="Author"
                    className="bg-white text-black border border-gray-300"
                    ref={authorRef} required />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add Post</button>
        </form>
    );
}

export default AddPost;