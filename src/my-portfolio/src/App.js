import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <div className="FullPage">
          <div className="ContactWrapper">
          <a target="_blank" href="https://linkedin.com/in/varun-setia-1686069b" className="ContactButton">Connect to know more..</a>
          </div>
          <div className="Intro">
              <h1>Varun Setia</h1>
              <h2>Full Stack Developer | IT Consultant | Technical Writer</h2>
          </div>
          <div className="Portfolio">
              <Portfolio/>
          </div>

      </div>

    </div>
  );
}

export default App;
