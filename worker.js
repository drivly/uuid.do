export default {
  fetch: async (req, env) => new Response(JSON.stringify({
    api: {
      icon: '⚡️',
      name: 'UUID.do',
      description: 'Unique ID Generation API',
      url: 'https://uuid.do',
      endpoints: {
        generateUUID: 'https://uuid.do/api',
        generateManyUUID: 'https://uuid.do/:quantity' 
      },
      memberOf: 'https://primitives.do',
    },
    uuid: crypto.randomUUID(),
    uuids: Array(parseInt(new URL(req.url).pathname.replace('/')) ?? 10).map(() => crypto.randomUUID()),
    user: await env.CTX.fetch(req).then(res => res.json()).then(({user}) => user) 
  }, null, 2)) 
}
