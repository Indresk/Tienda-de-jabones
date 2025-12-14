import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Catalog from './views/Catalog';
import ProductDetail from './views/ProductDetail';



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='p-8'>
          <Routes>
            <Route exact path="/" element={<Catalog />}/>
            <Route exact path="/categoria/:tipo" element={<Catalog />}/>
            <Route exact path="/categoria/:tipo" element={<Catalog />}/>
            <Route exact path="/categoria/:tipo" element={<Catalog />}/>
            <Route exact path="/product/:id" element={<ProductDetail />}/>
            <Route exact path="/*" element={<p>404</p>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
