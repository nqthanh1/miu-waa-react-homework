import React from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import AddPost from "./AddPost";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {

    const API_URL = "http://localhost:8080/api/posts";
    const [posts, setPosts] = useState([]);
    //fetching data from API
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    

    const [newTitle, setNewTitle] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [isAddingNewPost, setIsAddingNewPost] = useState(false);

    const updateFirstTitle = () => {

        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[0].Title = newTitle;
            return updatedPosts;
        });
    };

    const handlePostClick = (post) => {
        axios.get(`${API_URL}/${post.id}`)
            .then((response) => {
                setSelectedPost(response.data);
                setIsAddingNewPost(false);
            });
    };

    const handleDeletePost = (post) => {
        axios.delete(`${API_URL}/${post.id}`)
            .then((response) => {
                setPosts((prevPosts) => {
                    return prevPosts.filter((p) => p.id !== post.id);
                });
                setSelectedPost(null);
            });
    };

    const handleNewPost = (newPost) => {
        axios.post(API_URL, newPost)
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, response.data]);
            });
    };

    const handleAddNewPostClick = () => {
        setSelectedPost(null);
        setIsAddingNewPost(true);
    };

    return (
        <>
            <Posts posts={posts} onClick={handlePostClick} onNew={handleAddNewPostClick}></Posts>
            {isAddingNewPost ? (
                <AddPost onAdd={handleNewPost} />
            ) : (
                selectedPost && (
                    <div className="mt-4">
                        <PostDetail
                            post={selectedPost}
                            onDelete={handleDeletePost} />
                    </div>
                )
            )}
        </>
    );
}

export default Dashboard;