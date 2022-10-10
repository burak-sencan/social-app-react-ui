import { useState } from 'react'
import { Link } from 'react-router-dom'

import TwitterSidebar from './Brands/Twitter/TwitterSidebar'
import LinkedinSidebar from './Brands/Linkedin/LinkedinSidebar'
import InstagramSidebar from './Brands/Instagram/InstagramSidebar'
import { TwitterLogo, LinkedinLogo, InstagramLogo } from '../assets/images'

function Sidebar() {
  const [brand, setBrand] = useState('Twitter')
  return (
    <>
      <div className='center bg-sidebarSociality text-2xl p-2'>
        <Link to='/'>
          <span className='font-bold'>sociality</span> .io
        </Link>
      </div>
      <div className='flex h-full text-white'>
        <div className='flex flex-col p-4 bg-sidebar '>
          <button
            className=' relative brand-icons '
            onClick={() => {
              setBrand('Twitter')
            }}
          >
            <span className='notification-circle' style={{ color: 'white', backgroundColor: 'rgb(58,193,169)' }}>
              99
            </span>
            <img className='transition' style={brand === 'Twitter' ? { opacity: '1' } : { opacity: '0.4' }} src={TwitterLogo} alt='' />
          </button>
          <button
            className='brand-icons '
            onClick={() => {
              setBrand('Linkedin')
            }}
          >
            <img className='transition' style={brand === 'Linkedin' ? { opacity: '1' } : { opacity: '0.4' }} src={LinkedinLogo} alt='' />
          </button>
          <button
            className='brand-icons '
            onClick={() => {
              setBrand('Instagram')
            }}
          >
            <img className='transition' style={brand === 'Instagram' ? { opacity: '1' } : { opacity: '0.4' }} src={InstagramLogo} alt='' />
          </button>
        </div>
        <div>
          {brand === 'Twitter' && <TwitterSidebar />}
          {brand === 'Linkedin' && <LinkedinSidebar />}
          {brand === 'Instagram' && <InstagramSidebar />}
        </div>
      </div>
    </>
  )
}

export default Sidebar
