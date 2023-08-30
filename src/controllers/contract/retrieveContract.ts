import { ethers } from 'ethers';
import { RESULT } from '../../helpers/Types';

const { ETHERSCAN_API_KEY } = process.env;
const NETWORKS = ['homestead', 'goerli', 'sepolia', 'matic', 'maticmum', 'arbitrum', 'arbitrum-goerli', 'optimism', 'optimism-goerli'];
const contractABI = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function totalSupply() external view returns (uint256)',
    'function balanceOf(address _owner) public view returns (uint256)',
    'function decimals()external view returns (uint8)',
    'function allowance(address _owner, address _spender) external view returns (uint256)',
];
const getName = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const name: string = await contract.name();
            if (name) {
                result = {
                    success: true,
                    message: name,
                };
            }
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};

const getAllowance = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const owner: string = params.owner;
        const spender: string = params.spender;
        const checkOwner: boolean = /^0x[a-fA-F0-9]{40}$/g.test(owner);
        const checkSpender: boolean = /^0x[a-fA-F0-9]{40}$/g.test(spender);
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else if (!checkOwner) {
            result.message = 'Invalid owner address';
        } else if (!checkSpender) {
            result.message = 'Invalid spender address';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const allowance = await contract.allowance(owner, spender);
            result = {
                success: true,
                message: ethers.utils.formatUnits(allowance, 0),
            };
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};

const getBalanceOf = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const account: string = params.account;
        const network: string = params.network;
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkAccount: boolean = /^0x[a-fA-F0-9]{40}$/g.test(account);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else if (!checkAccount) {
            result.message = 'Invalid account address';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const balanceOf = await contract.balanceOf(account);
            if (balanceOf) {
                result = {
                    success: true,
                    message: ethers.utils.formatUnits(balanceOf, 0),
                };
            }
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};

const getDecimal = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);
            const decimals: number = await contract.decimals();
            if (decimals.toString().length) {
                result = {
                    success: true,
                    message: decimals,
                };
            }
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};

const getSymbol = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const symbol: string = await contract.symbol();
            if (symbol) {
                result = {
                    success: true,
                    message: symbol,
                };
            }
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};

const getTotalSupply = async (ctx: any) => {
    let result: RESULT = {
        success: false,
        message: 'Could not read smart contract',
    };

    try {
        const params = ctx.request.body;
        const contractAddress: string = params.address;
        const network: string = params.network;
        const checkAdress: boolean = /^0x[a-fA-F0-9]{40}$/g.test(contractAddress);
        const checkNetwork = NETWORKS.includes(network);
        if (!checkAdress) {
            result.message = 'Invalid contract address';
        } else if (!checkNetwork) {
            result.message = 'Invalid network';
        } else {
            const provider = new ethers.providers.EtherscanProvider(network, ETHERSCAN_API_KEY);
            const contract = new ethers.Contract(contractAddress, contractABI, provider);

            const totalSupply = await contract.totalSupply();
            const decimals = await contract.decimals();
            if (totalSupply.toString().length) {
                result = {
                    success: true,
                    message: ethers.utils.formatUnits(totalSupply, 18 - decimals),
                };
            }
        }
    } catch (error) {
        console.log('Error: ', error);
        result = {
            success: false,
            message: error,
        };
        ctx.status = 500;
    }
    ctx.body = result;
    return result;
};
export default {
    getAllowance,
    getName,
    getBalanceOf,
    getDecimal,
    getSymbol,
    getTotalSupply,
};
