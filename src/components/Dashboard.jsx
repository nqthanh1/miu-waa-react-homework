import React, { useContext } from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";

function Dashboard() {

    const API_URL = "http://localhost:8080/api/posts";
    const [posts, setPosts] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    //const [selectedPost, setSelectedPost] = useState(null);
    const [isAddingNewPost, setIsAddingNewPost] = useState(false);
    const [selectedPostId, setSelectedPostId] = useContext(PostContext);
    

    //fetching data from API
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    
    const updateFirstTitle = () => {

        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[0].Title = newTitle;
            return updatedPosts;
        });
    };

    const handlePostClick = (post) => {
        setSelectedPostId(post.id);
        setIsAddingNewPost(false);
    };

    const handleDeletePost = (post) => {
        axios.delete(`${API_URL}/${post.id}`)
            .then((response) => {
                setPosts((prevPosts) => {
                    return prevPosts.filter((p) => p.id !== post.id);
                });
                setSelectedPostId(null);
            });
    };

    const handleNewPost = (newPost) => {
        axios.post(API_URL, newPost)
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, response.data]);
            });
    };

    const handleAddNewPostClick = () => {
        setSelectedPostId(null);
        setIsAddingNewPost(true);
    };

    return (
        <>
            <Posts posts={posts} onClick={handlePostClick} onNew={handleAddNewPostClick}></Posts>
            {isAddingNewPost ? (
                <AddPost onAdd={handleNewPost} />
            ) : (
                selectedPostId && (
                    <div className="mt-4">
                        <PostDetail
                            onDelete={handleDeletePost} />
                    </div>
                )
            )}
        </>
    );
}

export default Dashboard;