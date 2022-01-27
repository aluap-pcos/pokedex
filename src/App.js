import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

import { GlobalStyle } from "./styles/global";

function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/details/:route' element={<Details/>}/>
        </Routes>
      </Router>
  );
}

export default App;
