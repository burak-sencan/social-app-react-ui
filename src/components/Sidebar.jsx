import { useState } from 'react'
import { Link } from 'react-router-dom'

import Brand3Sidebar from './Brands/Brand3/Brand3Sidebar'
import Brand2Sidebar from './Brands/Brand2/Brand2Sidebar'
import Brand1Sidebar from './Brands/Brand1/Brand1Sidebar'
import { Brand1, Brand2, Brand3 } from '../assets/images'
import { useSelector, useDispatch } from 'react-redux'
import { choseBrand } from '../features/sidebar/sidebarSlice'

function Sidebar() {
  // const [brand, setBrand] = useState('Brand1')
  const brand = useSelector((state) => state.sidebar.brand)
  console.log(brand)

  const dispatch = useDispatch()

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
              dispatch(choseBrand('Brand1'))
            }}
          >
            <img
              className='transition bg-white p-1 rounded-md '
              style={brand === 'Brand1' ? { opacity: '1' } : { opacity: '0.4' }}
              src={Brand1}
              alt=''
            />
          </button>
          <button
            className='brand-icons '
            onClick={() => {
              dispatch(choseBrand('Brand2'))
            }}
          >
            <img
              className='transition bg-white p-1 rounded-md '
              style={brand === 'Brand2' ? { opacity: '1' } : { opacity: '0.4' }}
              src={Brand2}
              alt=''
            />
          </button>
          <button
            className='relative brand-icons  '
            onClick={() => {
              dispatch(choseBrand('Brand3'))
            }}
          >
            <span className='notification-circle' style={{ color: 'white', backgroundColor: 'rgb(58,193,169)' }}>
              29
            </span>
            <img
              className='transition bg-white p-1 rounded-md '
              style={brand === 'Brand3' ? { opacity: '1' } : { opacity: '0.4' }}
              src={Brand3}
              alt=''
            />
          </button>
        </div>
        <div>
          {brand === 'Brand1' && <Brand1Sidebar />}
          {brand === 'Brand2' && <Brand2Sidebar />}
          {brand === 'Brand3' && <Brand3Sidebar />}
        </div>
      </div>
    </>
  )
}

export default Sidebar
