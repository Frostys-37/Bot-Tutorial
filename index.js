const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()//Constructor client, no servira para los eventos de Discord.js
const config = require('./config.json')
const { token } = require("./config.json") //Requrerimos la propiedad "Token" creada en el archivo config.json


client.on("ready", () => {//ABRIMOS EVENTO. OJJJJOOOO Esto es muy importante
    console.log(`${client.user.username} Listo!`)//Confirmacion en la consola de que el bot se ha encendido correctamente!.    
})//Cerramos evento OJO esto tambien es importante

let prefix = config.prefix;

client.on("message", async message => {//Abrimos evento message, es el mas importante
if(message.author.bot) return; //Esto sirve para que el bot no se conteste asi mismo o a otros bots



const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

if(command === "embed") {

const embed = new Discord.MessageEmbed()
.setTitle("Este es un titulo.. puede contener hasta 26 caracteres!")
.setColor("PURPLE") //El .setColor() permite darle un color a nuestro mensaje
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))//El .setAuthor permite mostrar el autor del mensaje, la funcion "displayAvatarURL()" desplegara el avatar del usuario que ejecuto el comando
.setDescription("Este es la descripcion / Cuerpo principal de la pagina, puede contener 2048 caracteres")
.setFooter("Este es el pie de pagina, puede contener 1024 caracteres", message.author.displayAvatarURL({dynamic: true}))
.setImage("https://media.discordapp.net/attachments/739133934134231101/811656770652209192/FB_IMG_1612198088834.jpg?width=584&height=584")//Este espacio nos permitira desplegar el avatar del usuario, tambien se puede poner imagenes a base de linksconst embed = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL())
.setTimestamp()
.addField("Este es el titulo de un camp", "Este es el segundo titulo, aqui pueden haber 1024 caracteres.")
.addField("Campo de Linea 1", "Este mensaje va debajo del primer campo")
.addField("Campo de linea 2", "Este mensaje va debajo del campo de linea 3. Pueden haber 20 addField")
message.channel.send(embed)//Enviamos el embed al canal donde se utilizo el comando.
}

//Avatar Command
if(command === "avatar") {

const user = message.mentions.users.first() || message.author;

const av = new Discord.MessageEmbed()
.setDescription(`Avatar de ${user}`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
.setColor("AQUA")
.setFooter("Avatar Command")
.setTimestamp()
message.channel.send(av)
}

})//Cerramos evento

//THIS PACKAGE IS A FINALISE

//Cada vez que se haga un cambio se reinicia el bot
client.login(config.token) 
