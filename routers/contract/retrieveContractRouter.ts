import Router from "koa-router";
import retrieveContract from "../../controllers"

const retrieveContractRouter = new Router({prefix: '/smart-contract'});

retrieveContractRouter.get("/read", (ctx: any) => retrieveContract.retrieveContract.readSmartContract(ctx))

export default retrieveContractRouter;