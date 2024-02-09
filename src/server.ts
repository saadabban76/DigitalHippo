import express from 'express';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    req, res
})

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
            }
        }
    });

    // LEARNINGS : here basically we are saying, the any request that comes to '/api/trpc' route should be handle by trpcExress middleware in which router and its context are present 
    // @see https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/README.md#security-headers
    app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
    }))

    app.use((req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
        payload.logger.info("Next.js Started")
    })

    app.listen(PORT, () => {
        payload.logger.info(`Nextjs Server listening on port ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
};

start(); // will start up the server