import { Route, Routes, Navigate } from "react-router";
import  Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";
import AddPost  from "../components/AddPost";


function PageRoutes() {
    return (
        <Routes>
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route path="posts" element={<Posts/>}>
                    <Route path=":id" element={<PostDetail />} />
                </Route>
            <Route path="add-post" element={<AddPost/>} />
        </Routes>
    );
}

export default PageRoutes;