import React, { useState } from 'react';
import MarketplaceJSON from "../../Marketplace.json";
import { useParams } from 'react-router-dom';
import './buy.css'
import Navbar from '../navbar/Navbar';
import { toast } from 'react-toastify';

const Buy = () => {
    const [data, updateData] = useState({});
    const [dataFetched, updateDataFetched] = useState(false);
    const [currAddress, updateCurrAddress] = useState("0x");



async function getNFTData(tokenId) {
    const { ethereum } = window.ethereum;
      if (ethereum) {
        alert("please install metamask");
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      console.log("my address", address)
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    const tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    const imageUri = tokenURI.slice(7);
    const data = await fetch(`https://nftstorage.link/ipfs/${imageUri}`)
    const json = await data.json()
    const str = json.image;
    const mylink = str.slice(7);
    console.log(listedToken);

    let item = {
        price: json.price,
        tokenId: tokenId,
        seller: listedToken.seller,
        owner: listedToken.owner,
        image: "https://nftstorage.link/ipfs/"+mylink,
        name: json.name,
        description: json.description,
    }
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr)
    updateCurrAddress(addr);
}

async function buyNFT(tokenId) {
    try {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        //Pull the deployed contract instance
        let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
        const salePrice = ethers.utils.parseUnits(data.price, 'ether')
        toast.info("Buying this NFT... Please Wait")
        //run the executeSale function
        let transaction = await contract.executeSale(tokenId, {value:salePrice});
        await transaction.wait();

        alert('You successfully bought the NFT!');
        window.location.reload();
       
    }
    catch(e) {
        alert("oops "+e)
        window.location.reload();
    }
}
    const params = useParams();
    const tokenId = params.tokenId;
    if(!dataFetched)
        getNFTData(tokenId);
  return (
      <section id='nftpage'>
          <Navbar/>
          <div className='buypage'>
              <div> 
                  <img src={data.image}  alt="" className='nftarea' />
              </div>
              <div className='descr'>                 
                  <div className='nftname'>{ data.name}</div>
                  <div className='nftDescription'>{ data.description}</div>
                 <div className='Royalties'>Royalties: 5% send back to the creator</div>
                 <div className='nftprice'>Price: {data.price} ETH</div>
              </div>
            {/*<button className='buyBtn' onClick={buyNFT}>Buy</button>*/}
               { currAddress === data.owner || currAddress === data.seller ?
                <div className="buyBtn">You are the owner of this NFT</div>:<button onClick={() => buyNFT(tokenId)}className="buyBtn">Buy this NFT</button>
            }
          </div>
      </section>
  )
}

export default Buy