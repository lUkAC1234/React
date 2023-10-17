const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React Blog</h1>
            <ul className="links-container">
                <a href="/" className="active">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#8828FF",
                    padding: "0.25rem 1rem",
                    borderRadius: "0.5rem"
                }}>New Blog</a>
            </ul>
        </nav>    
    );
}
 
export default Navbar;