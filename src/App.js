import {Routes, Route} from 'react-router-dom'
import Data from './pages/Data';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;