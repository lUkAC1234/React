import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First Blog', body: 'The body of first blog', author: 'First', id: 1 },
        { title: 'Second Blog', body: 'The body of Second blog', author: 'Second', id: 2 },
        { title: 'Third Blog', body: 'The body of Third blog', author: 'Third', id: 3 },
    ]);
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <BlogList blogs={blogs} title="All Blogs !"/>
        </div>
    );
}
 
export default Home;