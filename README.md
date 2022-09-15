# Coinbase Marketplace Ethsafari

This is an NFT Marketplace that connects to both Coinbase wallet and Metamask crypto Wallets.
NFT DATA(like metadata, images and other assests) is stored in IPFS and Filecoin through NFT.Storage and NFT tokenURl reference stored in blockchain.
This Marketplace allows a user to mint their own NFT to the blockchain. It allows the user to sell their nfts to other addresses changing ownership of NFT from one address to another.


# cloning the project

You can clone the project through the link https://github.com/devngeni/ng_eth_safari_1.git

# To run the client

```shell
npm install
npm start
```
You should have your NFT.Storage Key in your .env file

NFT_STORAGE_KEY = "REPLACE_ME_WITH_YOUR_KEY"


# How the Website works

NFT Marketplace allows users(buyer/seller) to link their accounts using Coinbase Wallet which allows them to communicate with the blockchain.
Once a user has logged in they are able to upload their NFT's that contains the metadata, description, image and price to a decentralised storage system. Once a user has uploaded an NFT, they own the NFT as the contract deployed by them is executed by their addresses.
Once one has uploaded the data, they recieve an IPFS hash of the content known as Contact Address that one can use to make an IPFS URL. You can use this URL to refer to off-chain data as a pointer to the content itself such that no one can dispute what your NFT is all about.
Data can be accessed from any decentralised IPFS network as long as it has content.
The data of the NFT is then stored in the IPFS which when minted is queued for 48hours then uploaded to filecoin for a life time.
The buyer can then view the NFT, see the description of the NFT through the metadata URL of the the NFT then can a buy the NFT.
After buying it the ownership belongs to him/her.
If another buyer buys the NFT it changes the ownership but there are some royalties which goes to the main creator of the NFT .
The process continues as the creator of the NFT benefits from the royalties.

#Terms
Coinbase - This is a digital cryptocurrency exchange platfrom.
IPFS(InterPlanetary File System) - is a protocol, hypermedia and file sharing peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting IPFS hosts.
Filecoin - This is an open-source, public cryptocurrency and digital payment system intended to be a blockchain-based cooperative digital storage and data retrieval method
NFT.Storage - This is a free decentalized storage and bandwidth for NFTs on IPFS and Filecoin.

