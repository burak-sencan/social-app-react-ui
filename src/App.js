import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import TwitterFeed from './components/Brands/Twitter/TwitterFeed'
import TwitterCompose from './components/Brands/Twitter/TwitterCompose'

function App() {
  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        <div className='flex flex-col  bg-sidebarBrand '>
          <Sidebar />
        </div>
        <div className='flex flex-grow p-8 flex-col overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/twitter'>
              <Route path='feed' element={<TwitterFeed />} />
              <Route path='compose' element={<TwitterCompose />} />
            </Route>
            <Route path='/linkedin'></Route>
            <Route path='/instagram'></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
