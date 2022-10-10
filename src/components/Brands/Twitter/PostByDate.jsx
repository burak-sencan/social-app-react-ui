function PostByDate() {
  return (
    <div className="flex flex-col">
      <div>
        <p>14 January 2016</p>
      </div>
      <div className='flex gap-1  overflow-x-auto'>
        <div className='flex-shrink-0 w-[250px] h-80 border'>test post</div>
        <div className='flex-shrink-0 w-[250px] h-80 border'>test post</div>
        <div className='flex-shrink-0 w-[250px] h-80 border'>test post</div>
    
      </div>
    </div>
  )
}

export default PostByDate
