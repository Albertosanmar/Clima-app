// src/App.js
import './assets/css/App.css';
import NavBar from './components/NavBar';
import ClimaPanel from './components/ClimaPanel';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import Background from './components/Background';

function App() {
  return (
   
    <div className="App">
      <div className="app-wrapper">
        <Background />
        <NavBar />
        <ClimaPanel />
        <Footer />
      </div>
    </div>
  );
}

export default App;

