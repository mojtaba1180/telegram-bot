const { Telegraf, Markup } = require("telegraf");

const fs = require('fs')

const bot = new Telegraf('5577282725:AAElt04_o_wpcibpF_vQ57RJfrALg28-0cA');


bot.start((ctx) => {
    ctx.reply(`
    با سلام خدمت عزیزان گرامی 
    برای ثبت نام در ساامانه ما 
    لطفا یکی از گزینه های زیر را انتخاب کنید :

    `,
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "کارفرما", callback_data: "customer" }, { text: "کارجو", callback_data: "Company" }],
                ]
            }
        }
    )
})
bot.hears("help", async msg => {
    console.log(msg.message.text);
});
// /get customer info 
bot.action('customer', async ctx => {
   await ctx.reply(`
    لطفا مشخص کنید شرکت می باشید یا کارفرما
    `, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "اصناف", callback_data: "Guilds" }, { text: "شرکت", callback_data: "Company" }],
            ]
        }
    });
});




// handle guilds action 
bot.action("Guilds", async msg => {
  await  msg.reply("لطفا مدارک  زیر را ارسال کنید ")

})

// handle company action 
bot.action("Company", async msg => {
   await msg.reply(" شما گزینه شرکت را انتخاب نموده اید  ")
   await msg.reply(" مدارک مورد نیاز  ", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "پروانه بهره برداری", callback_data: "Guilds", }],
                [{ text: "مشخصات مدیرعامل", callback_data: "Company" }]
            ]
        }
    })
})




// /get jobs info 
bot.action('jobs', async ctx => {
    ctx.reply("Hi there!", {
        reply_markup: {
            inline_keyboard: [
                /* Inline buttons. 2 side-by-side */
                [{ text: "اصناف", callback_data: "Guilds" }, { text: "شرکت", callback_data: "Company" }],
            ]
        }
    });
});




bot.launch();