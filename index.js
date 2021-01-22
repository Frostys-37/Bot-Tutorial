const Discord = require("discord.js")
const client = new Discord.Client() //Constructor client, no servira para los eventos de Discord.js

client.on("ready", () => {//ABRIMOS EVENTO. OJJJJOOOO Esto es muy importante
    console.log(`${client.user.username} Listo!`)//Confirmacion en la consola de que el bot se ha encendido correctamente!.    
})//Cerramos evento OJO esto tambien es importante

client.on("message", async message => {//Abrimos evento message, es el mas importante
if(message.author.bot) return; //Esto sirve para que el bot no se conteste asi mismo o a otros bots

if(message.content === "ping") {
    message.channel.send("Pong!") //"message.channel.send()" Sirve para que el bot conteste el mensaje donde se ejecuto el comando,
    message.author.send("Pong!") //"message.author.send" sirve para que el bot envie la respuesta del comando al DM del autor.
}

})//Cerramos evento
//Cada vez que se haga un cambio se reinicia el bot
client.login("ODAyMTkzMTY3NTY2NzY2MTMx.YArqmw.Q3NPq7-J77cmH-R5gSv5Ih-paN0") 