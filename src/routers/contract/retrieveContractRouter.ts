import Router from 'koa-router';
import retrieveContract from '../../controllers';

const retrieveContractRouter = new Router({ prefix: '/read-smart-contract' });

retrieveContractRouter.get('/allowance', (ctx: any) => retrieveContract.retrieveContract.getAllowance(ctx));
retrieveContractRouter.get('/balanceOf', (ctx: any) => retrieveContract.retrieveContract.getBalanceOf(ctx));
retrieveContractRouter.get('/decimals', (ctx: any) => retrieveContract.retrieveContract.getDecimal(ctx));
retrieveContractRouter.get('/name', (ctx: any) => retrieveContract.retrieveContract.getName(ctx));
retrieveContractRouter.get('/symbol', (ctx: any) => retrieveContract.retrieveContract.getSymbol(ctx));
retrieveContractRouter.get('/totalSupply', (ctx: any) => retrieveContract.retrieveContract.getTotalSupply(ctx));

export default retrieveContractRouter;
