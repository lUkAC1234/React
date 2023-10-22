import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [name , setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, []);

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            {blogs && <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario Blogs" handleDelete={handleDelete}/> }
            <button onClick={() => setName('Second')}>Change the name</button>
        </div>
    );
}
 
export default Home;