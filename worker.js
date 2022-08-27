export default {
  fetch: () => new Response(JSON.stringify({
    api: {
      icon: '⚡️',
      name: 'UUID.do',
      description: 'Unique ID Generation API',
      url: 'https://uuid.do',
      endpoints: {
        uuid: 'https://uuid.do/api' 
      }
    },
    uuid: Crypto.randomUUID(),
  }, null, 2)) 
}
