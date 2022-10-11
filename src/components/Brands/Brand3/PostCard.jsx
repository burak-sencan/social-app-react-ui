import { useEffect, useState } from 'react'
import { NoPostImage } from '../../../assets/images/index'

import { BsTwitter, BsInstagram, BsFillShareFill, BsTrash } from 'react-icons/bs'
import { FaFacebookF, FaBan } from 'react-icons/fa'
import { AiFillLike, AiOutlineEye, AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineModeComment } from 'react-icons/md'
import { TbDotsCircleHorizontal } from 'react-icons/tb'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

function PostCard({ post }) {
  const [postMessage, setPostMessage] = useState(post.entry.message)
  const [postUrl, setPostUrl] = useState('')

  const linkfy = () => {
    let url = postMessage.match(/(https?:\/\/[^\s]+)/g, '')
    if (url) {
      setPostUrl(url[0])
    }
    setPostMessage(postMessage.replace(/(https?:\/\/[^\s]+)/g, ''))
  }
  useEffect(() => {
    linkfy()
  }, [])

  return (
    <div className='flex flex-shrink-0 rounded-md overflow-hidden  h-[30rem] 2xl:h-[35rem]  w-[22rem] 2xl:w-[25rem] shadow-md  bg-white text-published'>
      <div
        className={
          'flex flex-col flex-grow-[3] basis-10 flex-shrink-0  items-center justify-center  ' +
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
      <div className='flex flex-col  flex-grow-[7] p-4 overflow-y-auto '>
        <div className='flex flex-col h-[90%] '>
          <div className='flex justify-between items-center pb-4'>
            <p className=''>{post.published_at}</p>
            <div className='flex gap-2 text-lg'>
              <ButtonGroup variant='text' disableElevation aria-label='Disabled elevation buttons '>
                {post.status === 1 ? (
                  <Button style={{ color: 'rgb(172,172,172)' }}>
                    <BsTrash />
                  </Button>
                ) : post.status === 2 ? (
                  <>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <FaBan />
                    </Button>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <BsTrash />
                    </Button>
                  </>
                ) : post.status === 3 ? (
                  <>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <AiOutlineCheck />
                    </Button>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <BsTrash />
                    </Button>
                  </>
                ) : post.status === 4 ? (
                  <Button style={{ color: 'rgb(172,172,172)' }}>
                    <BsTrash />
                  </Button>
                ) : post.status === 5 ? (
                  <>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <BsTrash />
                    </Button>
                    <Button style={{ color: 'rgb(172,172,172)' }}>
                      <AiOutlineCheck />
                    </Button>
                  </>
                ) : null}
                <Button style={{ color: 'rgb(172,172,172)' }}>
                  <TbDotsCircleHorizontal />
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <p className='pb-4'>
            {postMessage}{' '}
            <a className='text-blue-400 font-medium' target={'_blank'} href={postUrl} rel='noreferrer'>
              {postUrl}
            </a>
          </p>
          <img
            src={post.entry.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src = NoPostImage
            }}
            alt=''
          />
        </div>
        <div className='flex justify-self-end h-[10%]'>
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
