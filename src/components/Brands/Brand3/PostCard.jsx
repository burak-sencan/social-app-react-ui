import { BsTwitter, BsInstagram, BsFillShareFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillLike, AiOutlineEye } from 'react-icons/ai'
import { MdOutlineModeComment } from 'react-icons/md'

function PostCard({ post }) {
  return (
    <div className='flex flex-shrink-0 rounded-md overflow-hidden  h-[25rem] w-[20rem] shadow-md  bg-white text-published'>
      <div
        className={
          'flex flex-col flex-grow-[3] basis-8 flex-shrink-0  items-center justify-center  ' +
          (post.status === 1
            ? 'bg-published'
            : post.status === 2
            ? 'bg-scheduled'
            : post.status === 3
            ? 'bg-needApproval'
            : post.status === 4
            ? 'bg-error'
            : post.status === 5
            ? 'bg-notes'
            : 'bg-white')
        }
      >
        {post.account.channel === 'twitter' ? (
          <BsTwitter className='text-white ' />
        ) : post.account.channel === 'instagrambusiness' ? (
          <BsInstagram className='text-white' />
        ) : post.account.channel === 'facebook' ? (
          <FaFacebookF className='text-white' />
        ) : null}
      </div>
      <div className='flex flex-col flex-grow-[7] p-4 overflow-y-auto '>
        <div className=''>
          <p className=''>{post.published_at}</p>
          <p>{post.entry.message}</p>
          <img src={post.entry.image} alt='' />
        </div>
        <div className='flex justify-self-end'>
          <div className='flex items-center gap-2 p-3'>
            <AiFillLike />
            <p>0</p>
          </div>
          <div className='flex items-center gap-2 p-3'>
            <MdOutlineModeComment />
            <p>0</p>
          </div>
          <div className='flex items-center gap-2 p-3'>
            <BsFillShareFill />
            <p>0</p>
          </div>
          <div className='flex items-center gap-2 p-3'>
            <AiOutlineEye />
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
