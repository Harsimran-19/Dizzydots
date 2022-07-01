import React from 'react'
import '../App.css'
const Nfts=[{
    title:"Inception",
    image:"https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    creator:"dsfsdfsd",
    price:"1.2",
},{
     title:"Morbius Ring",
    image:"https://images.unsplash.com/photo-1644212830458-32ef05d37772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    creator:"Lorem",
    price:"3.2"
},{
    title:"Hand",
   image:"https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   creator:"priyansh",
   price:"3.1",
},{
    title:"Hand up",
   image:"https://images.unsplash.com/photo-1637819203905-2294a31391d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"smasher12",
   price:"4.2",
},{
    title:"HandFace",
   image:"https://images.unsplash.com/photo-1636702345662-f13960e2e5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"sdasd",
   price:"2.0",
},{
    title:"Hello",
   image:"https://images.unsplash.com/photo-1642840205517-6eb1e2741f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"logan",
   price:"1.7",
},{
    title:"Red",
   image:"https://images.unsplash.com/photo-1505508520564-7e2642683d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5OTMxOTB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
   creator:"someone",
   price:"4.5",
},{
    title:"BlackHole",
   image:"https://images.unsplash.com/photo-1651176957759-88e994301323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxNXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"Harsimran",
   price:"4.3",
},{
    title:"Something",
   image:"https://images.unsplash.com/photo-1649350664725-5639bf6670e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"Harsimran",
   price:"5.4",
},{
    title:"Deer",
   image:"https://images.unsplash.com/photo-1648070714286-d875c120d679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU2OXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"sdsasd",
   price:"2.3",
},{
    title:"Spheres",
   image:"https://images.unsplash.com/photo-1647351408653-d582b364bf2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"Hello13",
   price:"3.4",
},{
    title:"CyborgBat",
   image:"https://images.unsplash.com/photo-1647021038407-fca3bfd3bf0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   creator:"Harsimran",
   price:"3.8",
},]
const MarketPlace = () => {
  return (
    <div className="marketContaner flex flex-col justify-center items-center" id="drops">
        <div className="flex flex-col items-center">
            <h1 className='sectionsubHeading'>NFT Market Place</h1>
            <h1 className='sectionHeading text-white'>Hot Drops</h1>
        </div>
        <div className="tabs">

        </div>
        <div className="dropItems div mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
{Nfts.map((Nft)=>{
    return(
        <div class="w- p-6 bg-gray rounded-xl shadow-xl hover:shadow-2xl border-solid-blue hover:scale-105 transition-all transform duration-500">
        <img class="w-64 object-cover rounded-t-md" src={Nft.image} alt="" />
        <div class="mt-4">
          <h1 class="text-2xl font-bold text-white">{Nft.title}</h1>
          <p class="text-sm mt-2 text-gray-200">{`@${Nft.creator}`}</p>
          <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button class="block text-xl font-semibold text-white cursor-auto">{`${Nft.price} ETH`}</button>
            <button class="text-lg  block font-semibold py-2 px-6  hover: bg-blue-600 rounded-lg shadow text-white hover:shadow-md transition duration-300  text-white">Collect</button>
          </div>
        </div>
      </div>
    )
})}
  
</div>
        </div>
    
  )
}

export default MarketPlace