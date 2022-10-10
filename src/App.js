import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Brand3Feed from './components/Brands/Brand3/Brand3Feed'
import Brand3Compose from './components/Brands/Brand3/Brand3Compose'

function App() {
  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        <div className='flex flex-col  bg-sidebarBrand '>
          <Sidebar />
        </div>
        <div className='flex flex-grow p-8 flex-col overflow-y-auto bg-whiteBackground'>
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/brand3'>
              <Route path='feed' element={<Brand3Feed />} />
              <Route path='compose' element={<Brand3Compose />} />
            </Route>
            <Route path='/brand1'></Route>
            <Route path='/brand2'></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
