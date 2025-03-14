import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import config from "../config";
import Comments from "./Comments";
import { PostContext } from "../context/PostContext";

function PostDetail({ onEdit, onDelete }) {


    const [comments, setComments] = useState([]);
    const [selectedPostId, setSelectedPostId] = useContext(PostContext);
    const [selectedPost, setSelectedPost] = useState(null);

    if (!selectedPostId) return null;

    //fetching data from API
    useEffect(() => {
        if (selectedPostId) {
            axios.get(`${config.API_URL}/${selectedPostId}`)
                .then((response) => {
                    setSelectedPost(response.data);
                });
        }
    }, [selectedPostId]);

    useEffect(() => {
        if (selectedPostId) {
            axios.get(`${config.API_URL}/${selectedPostId}/comments`)
                .then((response) => {
                    setComments(response.data);
                });
        }
    }, [selectedPostId]);

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-full border border-gray-300 m-2">
            <p className="text-lg font-bold">Id: {selectedPostId}</p>
            {selectedPost && (
                <>
                    <p className="text-lg mt-2"><span className="font-bold">Title:</span> {selectedPost.title}</p>
                    <p className="text-lg mt-2"><span className="font-bold">Content:</span> {selectedPost.content}</p>
                    <p className="text-lg mt-2"><span className="font-bold">Author:</span> {selectedPost.author}</p>
            
                </>
            )}
            {comments.length > 0 && <Comments comments={comments} />}
            <div className="mt-4 flex justify-end">
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2"
                    onClick={() => onEdit(selectedPost)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() => onDelete(selectedPost)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default PostDetail;