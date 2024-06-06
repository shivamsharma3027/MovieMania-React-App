import loader from '..//loader.webp'

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <img className=" h-[60%] object-cover" src={loader} alt="" />
    </div>
  )
}

export default Loading
