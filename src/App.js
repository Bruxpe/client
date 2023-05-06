import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; 
import Inicio from './Components/Inicio/Inicio.jsx';
import AHome from './Components/Ahome/Ahome.jsx';
import Delete from './Components/Delete/Delete';
import Create from './Components/Create/Create';
import CardDetail from './Components/CardDetail/CardDetail';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pokemons" element={<AHome/>} />
        <Route path="/pokedetail/:id" element={<CardDetail/>} /> //?falta, este capas vayua al ultimo
        <Route path="/createpoke" element={<Create/>} /> 
        <Route path="/deletepoke" element={<Delete/>} /> 
      
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;