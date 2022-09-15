# Coinbase Marketplace Ethsafari

This is an NFT Marketplace that connects to both coinbase wallet and Metamask crypto Wallets.
NFT metadata is stored in IPFS and Filecoin through nft.storage and NFT tokenURl reference stored in blockchain.
This Marketplace allows a user to mint their own NFT to the blockchain. It allows the user to sell their nfts to other address


# cloning the project

You can clone the project through the link https://github.com/devngeni/ng_eth_safari_1.git

# To run the client

```shell
npm install
npm start
```


# How the Website works

The owner uploads the NTF's name that contains the description of the NFT
and amount of eth that wants to be traded with.This is the creator of the contract of the NFT
The metadata of the NFT is then stored in the IPFS which when minted is queed after 48hours it is stored in the filecoin for a live time.
The buyer can then view the NFT, see the description of the NFT through the metadata URL of the the NFT then can a buy the NFT.
After buying it the ownership belongs to him/her.
If another buyer buys the NFT it changes the ownership but there are some royalties which goes to the main creator of the NFT .
The process continues as the creator of the NFT benefits from the royalties.

