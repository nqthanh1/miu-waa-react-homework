import React, { useRef } from "react";
import config from "../config";  
import axios from "axios";

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

        // Send the new post to the API
        axios.post(config.API_URL, newPost)
            .then((response) => {
                // Clear the form
                titleRef.current.value = "";
                contentRef.current.value = "";
                authorRef.current.value = "";
            })
            .catch((error) => {
                console.error("There was an error adding the post:", error);
            });
        
        
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