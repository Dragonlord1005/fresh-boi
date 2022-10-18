import { HandlerContext, Handlers } from '$fresh/server.ts';

export const handlers: Handlers = {
    GET(_req: Request, _ctx: HandlerContext) {
        return new Response("Hello World")
    }
}

