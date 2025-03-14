import React, { useState ,useEffect} from "react";
import config from "../config";
import Post from "./Post";
import axios from "axios";
import { Link } from "react-router-dom";

function Posts() { 
    const [posts, setPosts] = useState([]);

    //fetching data from API
    const fetchPosts = () => {
    axios.get(config.API_URL)
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.log(error.message)
        })
    }
 
    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {posts.map((post) => (
                <Link to={`${post.id}`} key={post.id} >
               <Post key={post.id} post={post} />
            </Link>    
            ))}
        </div>
    );
}

export default Posts;