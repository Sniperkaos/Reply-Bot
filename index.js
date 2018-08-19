const Discord = require('discord.js');

const angel_bot = new Discord.Client();

var prefix = 'praise be allah';

angel_bot.on('message', (message) => {

    let roleid = "479836737590263828";

    if(message.content == prefix + ' Allahuakbar')
    {
    if(message.member.roles.find("name", "Arch-angels") || message.member.roles.find("name", "GOD"))
     {
    function clear()
        {

            console.log(`working`);

            message.delete();

            ///const fetched = await message.channel.fetchMessages({limit: 100});

            message.channel.bulkDelete("50");

            message.channel.send("Allahu Akbar!");
        }
        
        clear();
    }
    else
    {
        message.channel.send("nah boi u aint got perms ha goteem")
    }
    }

    else if(message.content == prefix + ' Allhumdulillah') 
    {

        function nou() 

        {
        message.delete();
        message.channel.sendMessage(" , the server needs your assistance!");
        }

        nou();

    }
});
angel_bot.on('error', console.error);
angel_bot.login('NDc5NTQ5NjU3NTUxMjA4NDY3.Dla3WQ.bKm2KbOtca1kIS12KbujKL1TZpM')