import React from 'react'

const Community = () => {
  return (
    <div className="div w-full mt-20 mb-40  subContainer flex items-center justify-center" id='community'>
        <div className="container height-4/5 w-5/6 text-white flex flex-col items-center justify-center rounded-lg bg-gray-800">
            <h1 className='font-bold text-xl mb-5'>Join our Community</h1>
            <h2 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit numquam officia?</h2>
            <div class="flex flex-warp mt-10 justify-between md:flex-row">
              <button class="bg-blue-600 btn h-12 hover:bg-blue-800  text-white font-bold py-2 px-4 rounded-full">
  Launch Discord
</button>
            </div>
        </div>
    </div>
  )
}

export default Community