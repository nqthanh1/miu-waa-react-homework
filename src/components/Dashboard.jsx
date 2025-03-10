import React from "react";
import Posts from "./Posts";
import PostDetail from "./PostDetail";
import { useState, useEffect } from "react";

function Dashboard() { 

    

    const [posts, setPosts] = useState([
            { Id: 1, Title: "Post 1", Author: "Author 1" },
            { Id: 2, Title: "Post 2", Author: "Author 2" },
            { Id: 3, Title: "Post 3", Author: "Author 1" },
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);

    const updateFirstTitle = ( ) => {

        setPosts((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[0].Title = newTitle;
            return updatedPosts;
        });
    }

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

      const handleDeletePost = (post) => {
        setPosts((prevPosts) => prevPosts.filter((p) => p.Id !== post.Id));
        setSelectedPost(null);
    };
    return (
        <>
            <Posts posts={posts} onClick={handlePostClick}></Posts>
            <div className="flex justify-center items-center mt-4">
                <input
                    type="text"
                    className="border border-gray-300 p-2 rounded mr-2"
                    placeholder="Enter new title"
                    onChange={(e) => setNewTitle(e.target.value)}>
                    </input>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={updateFirstTitle}
                >
                    Update 1st Post Title
                </button>
            </div>
            {selectedPost && (
                <div className="mt-4">
                    <PostDetail
                        post={selectedPost}
                        onDelete={handleDeletePost}/>
                </div>
            )}
        </>
    );
}

export default Dashboard;