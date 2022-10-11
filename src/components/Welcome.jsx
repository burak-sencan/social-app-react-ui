import { MdOutlineWavingHand } from 'react-icons/md'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='flex flex-col items-center justify-around h-full'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='flex items-center gap-4 text-[64px]'>
          <MdOutlineWavingHand />
          Hello
        </h1>
      </div>
      <Link to={'/brand3/feed'}>
        <Button variant='contained'>Get Start</Button>
      </Link>
    </div>
  )
}

export default Welcome
