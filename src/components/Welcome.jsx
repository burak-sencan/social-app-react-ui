import { MdOutlineWavingHand } from 'react-icons/md'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { handleWelcome } from '../features/sidebar/sidebarSlice'
import { useDispatch } from 'react-redux'

function Welcome() {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col items-center justify-around h-full'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='flex items-center gap-4 text-[64px]'>
          Welcome
          <MdOutlineWavingHand className='welcome'/>
        </h1>
      </div>
      <Link to={'/brand3/feed'}>
        <Button onClick={() => dispatch(handleWelcome())} variant='contained'>
          Show Design
        </Button>
      </Link>
    </div>
  )
}

export default Welcome
