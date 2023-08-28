import combineRouters from "koa-combine-routers";

import retrieveContractRouter from "./contract/retrieveContractRouter";

const router = combineRouters(
    retrieveContractRouter
)

export default router;