import { Link } from "react-router-dom";

const Header = () => {
    return ( 
     
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/add-post">Add Post</Link></li>
          </ul>
        </nav>

    );
};

export default Header;