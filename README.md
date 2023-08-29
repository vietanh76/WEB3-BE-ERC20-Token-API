# [WEB3-BE] ERC20 Token API

## Introduction

In this task, you must build an API allowing users to get data from a smart contract.

## Prerequisites

* Node.js
* Basic knowledge of EVM-compatible networks
* Familiar with [blockchain explorer](https://etherscan.io/)
* [ethers.js](https://docs.ethers.org/) - A library for interacting with EVM blockchain

## Requirements

* Create an API server using Node.js
* The API server allows users to read the contract data.
* Replicate the function of the "Read Contract" tab from the [ERC-20 token page](https://sepolia.etherscan.io/token/0xA36755735977F9cc24a91532652ad1AEF4707771#readContract).

## Enhancements

* Make the APIs work with other ERC-20 tokens in the same network.
* Make the web app work with other EVM-compatible networks.

## References

* [Application Binary Interface (ABI)](https://docs.soliditylang.org/en/v0.8.20/abi-spec.html)
* [Working with ethers.js](https://docs.ethers.org/v6/getting-started)
* [ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20)

# INSTALL

## 1. Clone project
## 2. Edit .env file
Create new ```.env``` file in your repo directory
Edit these following fields in __your ```.env```__:
- ETHERSCAN_API_KEY: create on [Etherscan.io](https://etherscan.io/)
- PORT
## 3. Install dependencies
```shell
# Install dependencies
npm i
```
## 4. Start project
```shell
npm run start
```
## 5. Call API to read smart contract
5.1 Endpoint: 
```shell
http://localhost:${PORT}/smart-contract/read
```
5.2 Body request:
```shell
# Example body request
{
    "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    "network": "homestead"
}
```
The correct result when read smart contract successfully like:
```shell
{
    "success": true,
    "message": {
        "name": "Ethereum Name Service",
        "symbol": "ENS",
        "totalSupply": {
            "type": "BigNumber",
            "hex": "0x52b7d2dcc80cd2e4000000"
        },
        "balanceOf": {
            "type": "BigNumber",
            "hex": "0xe6cb7e53f754b200"
        },
        "decimals": 18
    }
}
```