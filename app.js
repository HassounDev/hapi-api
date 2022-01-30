(async () =>  {

    // Modules

    const Hapi = require('hapi');

    // Global variable 

    const server = Hapi.server({
        port : 8000,
        host :'localhost'
    })

    server.route({
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return 'Racine'

        }
    })
    server.route({
        method : 'GET',
        path : '/ok/{name}',
        handler : (request, h) => {
            return 'Nom :' + request.params.name 

        }
    })
    await server.start()
    console.log(`server started : ${server.info.uri}`)
})().catch((e) => {
    console.log(e.message);
    console.log(e.stack);

})