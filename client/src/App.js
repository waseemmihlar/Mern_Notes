import './App.css';
import Nav from './components/navbar'
import {BrowserRouter,Route,Routes,NavLink, Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Create from './components/create'
import Notes from './components/notes'
import Home from './components/home'



function App() {
  return (
    
      <BrowserRouter>
          <Nav/>
      <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<Create/>}/>
        <Route exact path='/notes' element={<Notes/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
