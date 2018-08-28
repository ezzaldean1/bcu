const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  client.user.setGame('United Server','https://www.twitch.tv/peery13');

  console.log('---------------');

  console.log(' Bot Is Online')

  console.log('---------------')

});

	
  
  
  
  
  
  client.on('message', message => {//By Codes , ' ّEpicEdiTeDّ#4968

              if(!message.channel.guild) return;//By Codes , ' ّEpicEdiTeDّ#4968

    var prefix = "$";//By Codes , ' ّEpicEdiTeDّ#4968

    if(message.content.startsWith('$bc')) {//By Codes , ' ّEpicEdiTeDّ#4968

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** //By Codes , ' `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);//By Codes , ' ّEpicEdiTeDّ#4968

    let copy = "S Bot";//By Codes , ' ّEpicEdiTeDّ#4968

    let request = `Requested By ${message.author.username}`;//By Codes , ' ّEpicEdiTeDّ#4968

    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {//By Codes , ' ّEpicEdiTeDّ#4968

    msg.react('✅')//By Codes , ' ّEpicEdiTeDّ#4968

    .then(() => msg.react('❌'))//By Codes , ' ّEpicEdiTeDّ#4968

    .then(() =>msg.react('✅'))//By Codes , ' ّEpicEdiTeDّ#4968

 

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968

          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968

    reaction1.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968

    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968

    message.guild.members.forEach(m => {//By Codes , ' ّEpicEdiTeDّ#4968

    var bc = new//By Codes , ' ّEpicEdiTeDّ#4968

       Discord.RichEmbed()//By Codes , ' ّEpicEdiTeDّ#4968

       .setColor('RANDOM')//By Codes , ' ّEpicEdiTeDّ#4968

       .setDescription(`البرودكاست :mega:

**:shield: السيرفر : ** ${message.guild.name}

** :thinking:  المرسل : ** ${message.author.username}

**  الرسالة : ** ${args}

 

 

 

 

        `)//By Codes , ' ّEpicEdiTeDّ#4968

         .setTimestamp()//By Codes , ' ّEpicEdiTeDّ#4968

         .setFooter('S Bot' , 'https://cdn.discordapp.com/avatars/465885551329804288/55614337cfb9813916a60383469736d9.jpg?size=128')

    m.send({ embed: bc })

    msg.delete();//By Codes , ' ّEpicEdiTeDّ#4968

    })//By Codes , ' ّEpicEdiTeDّ#4968

    })//By Codes , ' ّEpicEdiTeDّ#4968

    reaction2.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968

    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , msg.delete();//By Codes , ' ّEpicEdiTeDّ#496

    })

    })//By Codes , ' ّEpicEdiTeDّ#4968

    }

    });//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , ' ّEpicEdiTeDّ#4968




const adminprefix = "$vip";//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});

 



client.login(process.env.BOT_TOKEN); 

 
