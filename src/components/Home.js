import React from 'react'
import '../Styles/Home.css'
import '../App.css'
const wallets=[
    {
        img:"https://www.pngkit.com/png/full/26-268992_metamask-metamask-wallet.png",
        title:"Metamask",
        hasImg:true,
    },
    {
        img:"https://www.bitgo.com/logo/bitgo-shield-logo.svg",
        title:"BitGo",
        hasImg:true,
    },
    
    {
        img:"https://www.yadawallets.com/wp-content/uploads/2020/10/exodus-wallet-logo.png",
        title:"Exodus",
        hasImg:true,
    },
    {
        img:"https://crypto-central.io/library/uploads/Trust-Wallet-Logo.png",
        title:"Trust Wallet",
        hasImg:true,
    },

]
const Home = () => {
  return (
    <div className="mainContainer ">
        <div className="bottomHeadContainer flex items-start justify-center">
            <h1 className='Heading flex '>Discover<img src={'https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'} className="dispImg image-cover h-100 ml-10 mr-10 mb-5 w-40 rounded-lg " alt="" /> Collect</h1>
        </div>
        <div className="bottomHeadContainer flex items-start justify-center"> <h1 className='Heading'>
        And Sell Rare</h1><img src={'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'} className="dispImg image-cover h-90 ml-10 mr-10 mt-10 mb-10 w-40 rounded-lg " alt="" />
        </div>
        <div className="NftHeadingContainer">
            <img src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80" className='dispImg rounded-full image-cover mt-5 h-40 w-40 mr-10' alt="" />
            <div className="nftPargraph flex items-center justify-start text-left mr-5">
              <p> Dizzydots, a NFT Marketplace where people can purchase and sell NFTs. NFTs are signed in and issued by the creator made possible with the blockchain texhnology </p>
            </div>
            <div className="Heading">NFTs</div>
        </div>
        <div className="walletContainer flex items-center justify-center">
            {wallets.map((wallet)=>{
                return(
                    <>
                    <div className="walletItem flex justify-end ">

<img src={wallet.img} className="w-14 h-14 mr-4" alt="" />
                        
                        <h1 className='walletTitle'>{wallet.title}</h1>
                    </div>
                    </>
                )
            })}
        </div>
    
    </div>
  )
}

export default Home