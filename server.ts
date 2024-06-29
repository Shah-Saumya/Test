const handler = async (req: Request) => {
    const path = new URL(req.url).pathname;
    switch (path) {
        case "test":
            return new Response("Hello world");

        default:
            return new Response("What!!!?");
    }
};

Deno.serve({
    port: 8000
}, handler);
