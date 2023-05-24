
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Contador/Contador'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ < ItemListContainer/>} />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
