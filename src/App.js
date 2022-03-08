import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritosProvider from './common/contexts/favoritosContext';
import PokemonsProvider from './common/contexts/pokemonsContext';
import Details from './pages/Details/Details';
import Favoritos from './pages/favoritos/Favoritos';
import Home from './pages/home/Home';

import { GlobalStyle } from "./styles/global";

function App() {
  return (
      <Router>
        <GlobalStyle/>
          <PokemonsProvider>
            <FavoritosProvider>
              <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path='/details/:route' element={<Details/>}/>
              </Routes>
            </FavoritosProvider>
          </PokemonsProvider>
      </Router>
  );
}

export default App;
