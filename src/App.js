import './assets/css/App.css';
import NavBar from './components/NavBar';
import ClimaPanel from './components/ClimaPanel';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import'./assets/css/App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <ClimaPanel />
      <Footer />
    </div>
  );
}

export default App;
