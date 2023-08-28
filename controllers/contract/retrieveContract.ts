import { ethers } from "ethers";
import { RESULT } from "../../helper/Types";

const { ETHERSCAN_API_KEY } = process.env;
const NETWORKS = ["homestead", "goerli", "sepolia", "matic", "maticmum", "arbitrum", "arbitrum-goerli", "optimism", "optimism-goerli"]
const contractABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address owner) view returns (uint)",
    "function decimals() view returns (uint8)",
];
const readSmartContract = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: "Could not read smart contract",
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const checkAdress:boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (checkAdress) {
            if (checkNetwork) {
                const provider = new ethers.providers.EtherscanProvider(
                    network,
                    ETHERSCAN_API_KEY
                );
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    provider
                );
        
                const name: string = await contract.name();
                const symbol: string = await contract.symbol();
                const totalSupply = await contract.totalSupply();
                const balanceOf = await contract.balanceOf(contract.address);
                const decimals: number = await contract.decimals();
                let dataContract = {
                    name: name,
                    symbol: symbol,
                    totalSupply: totalSupply,
                    balanceOf: balanceOf,
                    decimals: decimals,
                };
                result = {
                    success: true,
                    message: dataContract,
                };
            } else {
                result = {
                    success: false,
                    message: "Invalid network",
                };
            }
        } else {
            result = {
                success: false,
                message: "Invalid contract address",
            };
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error
        }
        ctx.status = 500;
    }
    ctx.body = result;
};

export default {
    readSmartContract
}
