import loader from "/loading.gif"

const Loading = () => {
  return (
    <div className='w-full h-screen bg-[#121111] flex items-center justify-center'>
        <img className='h-full w-full object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading