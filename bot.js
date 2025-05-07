const TelegramBot = require('node-telegram-bot-api');
const token = '7497400016:AAGk-OR1gspba0ltYakBKwgiKKdAb576MT4';
const bot = new TelegramBot(token, {polling: true});

const optionsKey = {
    reply_markup: {
        keyboard: [
            ['/start', '/weather']
        ],
        resize_keyboard: true
    }
}

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const msgText = msg.text;

    switch (msgText) {
        case '/start':
            bot.sendMessage(chatId, "Hello, welcome to my bot", optionsKey);
            break;
        case '/weather':
            bot.sendMessage(chatId, "We don't have API yet. Sorry", optionsKey)
            break;
        default:
            break;
    }
})