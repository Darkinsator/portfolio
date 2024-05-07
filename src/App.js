
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Route

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
        <Router>
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/about" element={<AboutMe />} /> {/* Specify element prop */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;