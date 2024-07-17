import loader from "/loading.webp"

const Loading = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <img className='h-1/2 object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading