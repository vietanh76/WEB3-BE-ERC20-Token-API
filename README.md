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
# get name
http://localhost:${PORT}/read-smart-contract/name
# get symbol
http://localhost:${PORT}/read-smart-contract/symbol
# get decimals
http://localhost:${PORT}/read-smart-contract/decimals
# get balanceOf
http://localhost:${PORT}/read-smart-contract/balanceOf
# get totalSupply
http://localhost:${PORT}/read-smart-contract/totalSupply
# get allowance
http://localhost:${PORT}/read-smart-contract/allowance
```
5.2 Body request:
```shell
# Example body request
{
    "address": "0xA36755735977F9cc24a91532652ad1AEF4707771",
    "network": "sepolia",
    "account": "0x718d5D3EFCe30C04D960DD8DdeC166c04349ab30",
    "owner": "0x718d5D3EFCe30C04D960DD8DdeC166c04349ab30",
    "spender": "0xebE5F4ED7ceD336A82aA107c27346CFCC5385fd7"
}
```
The correct result when read smart contract successfully like:
```shell
# result for get name
{
    "success": true,
    "message": "Token ITS"
}
# result for get symbol
{
    "success": true,
    "message": "ITS"
}
# result for get decimals
{
    "success": true,
    "message": 18
}
# result for get balanceOf
{
    "success": true,
    "message": "9990000000010000000198"
}
# result for get totalSupply
{
    "success": true,
    "message": "11205479000000010000123667"
}
# result for get allowance
{
    "success": true,
    "message": "0"
}
```