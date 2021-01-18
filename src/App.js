import "./App.css";
import {} from "react-router-dom";
import Routes from "./components/Routes";
import JumboNav from "./components/JumboNav";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <div class="jumbotron text-dark container">
          <h1 class="display-4 text-left">MicroBlog</h1>
          <p class="lead text-left">Read this blog or add your own</p>
          <hr class="my-4" />
          <JumboNav />
        </div >
        <Routes />
      </header>
    </div>
  );
}

export default App;
