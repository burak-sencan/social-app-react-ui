import { BsFillCircleFill } from 'react-icons/bs'
import { Avatar } from '../../../assets/images/index'
import PostByDate from './PostByDate'
import { useSelector, useDispatch } from 'react-redux'

function Brand3Feed() {
  const postData = useSelector((state) => state.post.postsByDate)

  return (
    <>
      <div className='flex  h-12  items-center justify-between'>
        <div className='flex gap-5 text-[14px]'>
          <div className='center gap-2'>
            <BsFillCircleFill className='text-[14px] text-published' />
            <p>Published</p>
          </div>
          <div className='center gap-2'>
            <BsFillCircleFill className='text-[14px] text-scheduled' />
            <p>Scheduled</p>
          </div>
          <div className='center gap-2'>
            <BsFillCircleFill className='text-[14px] text-needApproval' />
            <p>Need Approval</p>
          </div>
          <div className='center gap-2'>
            <BsFillCircleFill className='text-[14px] text-error' />
            <p>Error</p>
          </div>
          <div className='center gap-2'>
            <BsFillCircleFill className='text-[14px] text-notes' />
            <p>Notes</p>
          </div>
        </div>
        <div>
          <img className='h-12 w-12 rounded-full shadow-md' src={Avatar} alt='' />
        </div>
      </div>
      {Object.entries(postData).map(([key, value]) => (
        <PostByDate postDate={key} data={value} />
      ))}
    </>
  )
}

export default Brand3Feed
