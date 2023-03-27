/*CMD
  command: /0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var info = Bot.getProperty("user", { list: {} })
info.list[user.telegramid] = {
  user: {
    balance: 0,
    profit: 0,
    invested: 0,
    affiliate: 0,
    withdraw: 0,
    refid: GetRefLinked(params)
  }
}
Bot.setProperty("user", info, "json")
