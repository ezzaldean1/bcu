const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Gold Bot Is OnMusic')

  console.log('---------------')

  client.user.setStatus("Online")

 client.user.setActivity(" United Server",{type: 'PLAYING'})

});

client.on('message',async message => {

  if(message.content.startsWith( "$bc")) {

    let filter = m => m.author.id === message.author.id;

    let thisMessage;

    let thisFalse;

    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {

      max: 1,

      time: 20000,

      errors: ['time']

    })

    .then(collected => {

      collected.first().delete();

      thisMessage = collected.first().content;

      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');

      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{

        max: 1,

        time: 20000,

        errors: ['time']

      })

      .then(collected => {

        if(collected.first().content === 'لا') {

          msg.delete();

          message.delete();

          thisFalse = false;

        }

        if(collected.first().content === 'نعم') {

          if(thisFalse === false) return;

        message.guild.members.forEach(member => {

          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');

          collected.first().delete();

          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);

        });

        }

      });

    });

    });

  }

});

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
