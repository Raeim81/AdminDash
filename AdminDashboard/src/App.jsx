import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Footer from './Footer'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      <Footer /> {/* This line will render the Footer */}
    </div>
  )
}

export default App
