export default {
  fetch: async (req, env) => {
    const path = new URL(req.url).pathname.replace('/')
    let quantity = path == ':quantity' ? 50 : parseInt(path)
    if (quantity == NaN) quantity = 50
    return new Response(JSON.stringify({
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
      uuid: path == 'api' ? crypto.randomUUID() : Array(quantity).map(i => crypto.randomUUID()),
      user: await env.CTX.fetch(req).then(res => res.json()).then(({user}) => user) 
    }, null, 2))
  }
}
