import { Composer, Markup } from 'telegraf';

export const Start = Composer.command('start', async (ctx) => {
    let text =
        `Hi <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name} ${ctx.from.last_name}</a>\n` +
        `I Play Songs in Group Voice Chats add me and my assistant @Nobiee_Plugin in your group and ROCK ON🎧.\n` +
        `Deployed By <a href="https://t.me/itz_aastha_heartlessgirl">❣️Doremon❣️</a>`
    await ctx.replyWithHTML(text, {
        ...Markup.inlineKeyboard([
            [Markup.button.url('OWNER', 'https://t.me/Robo_Network')]
        ]),
        disable_web_page_preview: true
    })
})
