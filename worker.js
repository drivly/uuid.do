export default {
  fetch: () => new Response(JSON.stringify({
    api: {
      icon: '⚡️',
      name: 'UUID.do',
      description: 'Unique ID Generation API',
      url: 'https://uuid.do',
      endpoints: {
        uuid: 'https://uuid.do/api' 
      },
      memberOf: 'https://primitives.do',
    },
    uuid: crypto.randomUUID(),
    user: await env.CTX.fetch('https://ctx.do', req).then(res => res.json()).then(({user}) => user) 
  }, null, 2)) 
}
