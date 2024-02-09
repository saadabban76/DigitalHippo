import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter
    })
}