const BlogList = ({ blogs, title }) => {
    return ( 
        <div className="blog">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-column" key={blog.id}>
                    <h1>{ blog.title }</h1>
                    <p>{ blog.body }</p>
                    <p>{ blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;