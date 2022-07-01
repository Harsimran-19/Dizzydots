import React from 'react'
import '../App.css'
const Subscribe = () => {
  return (
    <div className="div w-full mt-20 mb-21  subContainer flex items-center justify-center">
        <div className="container height-4/5 w-5/6 text-white flex flex-col items-center justify-center rounded-lg bg-gray-800">
            <h1 className='font-bold text-xl mb-5'>Never Miss a Drop</h1>
            <h2 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit numquam officia?</h2>
            <div class="flex flex-warp mt-10 justify-between md:flex-row">
              <input type="email"
                class="m-1  p-3 md:w-96 appearance-none border-none text-gray-700 text-sm font-medium focus:outline-none focus:border-white focus:rounded focus:placeholder-transparent"
                placeholder="Enter your email" aria-label="Enter your email"/>
              <button class="bg-blue-600 btn h-12 hover:bg-blue-800  text-white font-bold py-2 px-4 rounded-lg">
  Subscribe
</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe