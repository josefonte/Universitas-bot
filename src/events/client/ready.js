module.exports = {
    name : 'ready',
    once : true, 
    async execute(client) {
        console.log(`BOT ${client.user.tag} is LOGGED and ONLINE.`);
    }
}