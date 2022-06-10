import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import UseStateHook from './hooks/useState'
import UseEffectHook from './hooks/useEffect'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<UseStateHook />}></Route>
        <Route path="/useState"  element={<UseStateHook />}></Route>
        <Route path="/useEffect" element={<UseEffectHook />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
