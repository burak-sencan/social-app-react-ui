import PostCard from './PostCard'

function PostByDate({ postDate, data }) {
  // console.log(postDate, data)
  return (
    <div className='flex flex-col'>
      <div>
        <p className='text-published text-lg'>{postDate}</p>
      </div>
      <div className='flex gap-2 p-2 overflow-x-auto'>
        {data.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostByDate
