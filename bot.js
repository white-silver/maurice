// Discord bot implements
require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();
const token = process.env.M_TOKEN;
client.on('ready', message =>
          {
          console.log('bot is ready!');
          });

client.on('message', message =>
          {
          if(message.isMemberMentioned(client.user))
          {
          message.reply( 'おれはモーリス・ホワイトさ！' );
          return;
          }
          if(message.content === '音楽かけて')
          {
          message.guild.channels.get('477793180872343552').send('!play https://www.youtube.com/playlist?list=PLKvNG6pPKW0OiBMgQdhG-4GEaQQKaHmEc&jct=hKDtsT670a_x7NH4CgpYkW8lTjEvXw'\n'!shuffle'\n'!skip'\n'!loopqueue');  
          }
          if (message.content === 'こんにちは')
          {
          // Send "pong" to the same channel
          message.channel.send('おっす！');
          }
          });

client.login(token);
