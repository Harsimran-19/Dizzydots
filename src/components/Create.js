import React from 'react'
import '../App.css'
const cards=[
    {
        title:"Create Artwork",
        img:'https://images.unsplash.com/photo-1645511897949-3d687943386b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        description:"Create your collection. Add social links,profiles and banner images and set secondary sales fee",
    },
    {
        title:"Upload",
        img:"https://images.unsplash.com/photo-1644124918590-fb3a607833e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2NnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        description:"Upload your work,customize your NFTs with properties, stats, and unlockable content",
    },
        {
        title:"Linking",
        img:"https://images.unsplash.com/photo-1644492489159-604b29742d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        description:"Set up and choose between auctions,fixed price listings and declining price listing",
    },
]
const Create = () => {
  return (
    <div className="creatorContainer flex flex-col items-center justify-center" id="create" >
        <div className="flex flex-col items-center ">
    <h1 className='sectionsubHeading'>How to be a Creator</h1>
    <h1 className='sectionHeading text-white'>Create and sell your NFTs</h1>
    </div>
    <div className="dropItems div mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-20 flex items-center">
    {cards.map((card)=>{
        return(
            <div class="w-80 rounded overflow-hidden shadow-lg text-center flex items-center flex-col ">
  <img class="w-full" src={card.img} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl text-white mb-2">{card.title}</div>
    <p class="text-base text-gray-400">
      {card.description}
    </p>
  </div>
</div>
        )
    })}
   
    </div>
    <div className=" buttonContainer w-50 w-vh flex items-around justify-center">
    <button class="bg-blue-600 btn  hover:bg-blue-800  text-white font-bold py-2 px-4 rounded-full">
  Create Now
</button>
<button class="border-white border-2 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full">
  Watch video
</button>
    </div>

    </div>
  )
}

export default Create