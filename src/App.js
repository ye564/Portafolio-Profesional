import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import Routes from './routes/Rout';

function App() {
  return (
    
      <Router>
        <Header/>
        <Routes/>
      </Router>
    
  );
}

export default App;