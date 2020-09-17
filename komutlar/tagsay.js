const Discord = require("discord.js");
var voiceChannels = voiceChannels
exports.run = function(client, message, args) {
let sunucu = '753299520837910649' //sunucu id
let yeskili= '753301260207259670' //yetkili id
  const mapping = {
  " ": "   ",
 "0": "<a:0_:753494333839114321>",
  "1": "<a:1_:753494328571330580>",
  "2": "<a:2_:753494332345942028>",
  "3": "<a:3_:753494332375433327>",
  "4": "<a:4_:753494330873872454>",
  "5": "<a:5_:753494332694069248>",
  "6": "<a:6_:753494334812455052>",
  "7": "<a:7_:753494331674984515>",
  "8": "<a:8_:753494852938891314>",
  "9": "<a:9_:753494334476648459>",
};
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size; 
  let tag = "ᛉ" // tagınız
    const taglis = `${message.guild.members.filter(m => m.user.username.includes(tag)).size}`    
let afa = client.guilds.get(sunucu).memberCount
    let kel = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
      let i = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size
    let halil= client.guilds.get(sunucu).roles.get(yeskili)
    let rols = halil.members.size
let rolse =  
    `${rols}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
/*let keban =  
    `${ses}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")*/
      
let toplam =  
    `${afa}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")

let online =  
    `${kel}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let sex =  
    `${i}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let tagli =  
    `${taglis}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let seslide =  
    `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")      
let sunucures = `${message.guild.iconURL}`
const embed = new Discord.RichEmbed()
          .setColor("BLACK")
        .setDescription(`**Sunucumuzdaki Taglı Üye Sayısı ${tagli} Bulunmakta**`)        
 message.channel.send(embed);
message.react('753494215648083998')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tagsay",
  usage: "online",
  desscription: "online sayısı"
};
