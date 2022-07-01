import React from 'react'
import '../App.css'
const creators=[
    {
        name:'Hello',
        ether:'3.2',
        img:"https://images.unsplash.com/photo-1616593918824-4fef16054381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    }, 
    {
        name:'Harsimran',
        ether:'21323',
        img:'https://images.unsplash.com/photo-1644012423770-1faf78a50d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4MnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, 
    {
        name:'sdsd',
        ether:'23123',
        img:'https://images.unsplash.com/photo-1644035657299-9376025604aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4MXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name:'priyansh',
        ether:'323',
        img:'https://images.unsplash.com/photo-1643993415781-502ec3bf17fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name:'himanshu',
        ether:'223',
        img:'https://images.unsplash.com/photo-1641984790242-d8aa477d306c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkwMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, 
    {
        name:'avishi',
        ether:'12',
        img:'https://images.unsplash.com/photo-1637246343887-ff59fa807073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkxOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, 
    {
        name:'unknown12',
        ether:'23123',
        img:'https://images.unsplash.com/photo-1643780209580-4930b4703f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkzOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, 
    {
        name:'harsh',
        ether:'232',
        img:'https://images.unsplash.com/photo-1643729041862-bf411535a4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk0NXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, 
    {
        name:'sddd12',
        ether:'23',
        img:'https://images.unsplash.com/photo-1643546014345-bbf1b12918a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk2MnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },

];
const Creators = () => {
  return (
    <>
    <div className="creatorContainer flex flex-col items-center justify-center " id='creators'>
        <div className="flex flex-col items-center ">
    <h1 className='sectionsubHeading'>NFT Creators</h1>
    <h1 className='sectionHeading text-white'>Top Creators this Week</h1>
    </div>
    </div>
    <div className="CreatorList items-center justify-center mt-10 mb-40 w-full dropItems  px-20 div grid grid-cols-1 gap-y-20 gap-x-30 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {creators.map((creator)=>{
            return(
                <div className=" h-35 flex border-white bg-gray-700  px-2 py-2 rounded-lg">
                  <img src={creator.img} alt="Img" className='rounded-lg h-20 w-20' />
                  <div className="infoContainer w-60  flex flex-col items-start px-10 justify-center"><h1 className='text-white font-bold'>{`@${creator.name}`}</h1><h1 className='font-bold text-gray-400'>{`${creator.ether} ETH`}</h1></div>  
                  </div>
                  
            )
        })}
    </div>
    </>
  )
}

export default Creators