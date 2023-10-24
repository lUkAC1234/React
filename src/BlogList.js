const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog">
            <h2>{title}</h2>
            <div className="blog-wrapper">
                {blogs.map((blog) => (

                    <div className="blog-column" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                        <p>{blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;