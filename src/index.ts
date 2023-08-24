import Koa from 'koa';
import Router from 'koa-router';
import { ethers } from 'ethers';
import SmartContractABI from '../contract/SmartContractABI.json'

const app = new Koa();
const router = new Router();
const port: number = 3000;

// app.use(async (ctx: Koa.Context) => {
//   ctx.body = 'Hello World';
// });

const network = ethers.providers.getNetwork("homestead")
const provider = new ethers.providers.EtherscanProvider(network);

// Load the smart contract ABI
const contractABI = SmartContractABI;
const contractAddress = '0xA36755735977F9cc24a91532652ad1AEF4707771';
const contract = new ethers.Contract(contractAddress, contractABI, provider);
// Define API endpoint
router.get('/getData', async (ctx) => {
  try {
    console.log('get Data', contractABI);
    // Call a function on the smart contract to get data
    const data = await contract.getData();

    ctx.body = { data };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'An error occurred', message: error };
  }
});

// Use the router middleware
app.use(router.routes()).use(router.allowedMethods());

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
// app.listen(port);