import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Catalog from './views/Catalog';
import ItemDetailContainer from './views/ItemDetailContainer';
import Footer from './components/Footer';



function App() {
  const menuItems = [
    {name: "Catálogo", link: "/"},
    {name: "Barra", link: "/categoria/barra"},
    {name: "Líquidos", link: "/categoria/liquidos"},
    {name: "Antibacteriales", link: "/categoria/antibacteriales"},
  ];

  return (
    <div className='min-h-screen grid grid-rows-(--general-grid)'>
      <NavBar menuItems={menuItems}/>
      <div className='p-8 max-w-5xl md:mx-auto'>
        <Routes>
          <Route exact path="/" element={<Catalog />}/>
          <Route exact path="/categoria/:tipo" element={<Catalog />}/>
          <Route exact path="/categoria/:tipo" element={<Catalog />}/>
          <Route exact path="/categoria/:tipo" element={<Catalog />}/>
          <Route exact path="/product/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/*" element={<p>404</p>}/>
        </Routes>
      </div>
      <Footer menuItems={menuItems}/>
    </div>
  )
}

export default App
