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
          if (message.content === 'こんにちは')
          {
          // Send "pong" to the same channel
          message.channel.send('おっす！');
          }
          });

client.login(token);
