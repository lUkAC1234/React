import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('React Ninja')
    const [age, setAge] = useState(15)

    const handleClick = () => {
       setName('React Ninja Changed !');
    }

    const handleClickAge = () => {
        setAge(20);
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name } { age }</p>
            <button className="clickBtn" onClick={handleClick}>Click Me !</button>
            <button className="clickBtn" onClick={handleClickAge}>Click Me Again !</button>
        </div>
    );
}
 
export default Home;