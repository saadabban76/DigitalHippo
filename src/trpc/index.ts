import { publicProcedure, router } from "./trpc";

export const appRouter = router(
    {
        anyApiRoute: publicProcedure.query(() => {
            return 'hello there !'
        })
    }
)

export type AppRouter = typeof appRouter