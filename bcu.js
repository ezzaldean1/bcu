const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Gold Bot Is OnMusic')

  console.log('---------------')

  client.user.setStatus("Online")

 client.user.setActivity(" Crystal Server",{type: 'PLAYING'})

});

var prefix= "$" 

client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith( prefix+'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

 

EmbedBc.on("collect", r => {

 

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

m.send(NormalRep);

msg.delete();

})

})

})

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





    

    

    

    
        
         
            

            

            

           

           

           



        

  

  

  

  

  

  

  

  


  





  

       

const fs = require('fs');

const moment = require('moment');

const jimp = require('jimp');

const Canvas = require('canvas');

 

client.on('guildMemberAdd', member => {

     const welcomer =  member.guild.channels.find('name', 'crystal');

const w = ['./w1.png'];

 

         let Image = Canvas.Image,

            canvas = new Canvas(400, 200),

            ctx = canvas.getContext('2d');

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 400, 200);

             

         

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                        if (err) return console.log(err);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(`welcome to crystal`, 300, 130);

                       

                        ctx.font = "bold 12px Arial";

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#f1f1f1";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 200, 150);

 

                let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(77, 101, 62, 0, Math.PI*2);

                              ctx.stroke();

                                 ctx.clip();

                                 ctx.drawImage(ava, 13, 38, 128, 126);  

                         

               

                             

welcomer.sendFile(canvas.toBuffer())

 

 

 

     

     

                    }  )  

     

                   

 

})

      });                    

});


}





 

 

 


    

    

            

      
        
      

      
      
     
client.login(process.env.BOT_TOKEN); 
