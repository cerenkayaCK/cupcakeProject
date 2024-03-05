import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//npm install react-router-dom  paketini kurduk.
function App() {
  return (
    /* navbarı kapsayacak şekilde router açtık. navbar altına routes ekledik orda route belirledik. kapsayıcı-yollar-yol şeklinde */
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* dizin belirlendi elementin gideceği component belirlendi.  */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
