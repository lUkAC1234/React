import './App.css';

function App() {
  const title = 'Welcome to the new blog!';
  const site = 'https://devcybercode.com/'
  // const person = {name: 'lUKAC', age: 15};

  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        {/* <p>{ person }</p> */}
        <p>{ 10 }</p>
        <p>{ 'Hello' }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={site}>Site</a>
      </div>
    </div>
  );
}

export default App;
