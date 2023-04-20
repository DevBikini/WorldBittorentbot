/*CMD
  command: /Reinvest
  help: 
  need_reply: true
  auto_retry_time: 
  folder: RE-INVEST
  answer: 
  keyboard: 
  aliases: 
CMD*/

var uses = Bot.getProperty("user", { list: {} })
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var data = uses.list[user.telegramid]
var bal = data.user.balance
var min = parseFloat(json_admin.withdraw.depomin)
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var amount = message * 1
if (!isNumeric(message)) {
  Bot.sendMessage("❌ Send a value over " + min + ", and under (or max) " + bal)
  return
}
if ((bal < amount) | (amount < min)) {
  Bot.sendMessage("❌ Send a value over " + min + ", and under (or max) " + bal)
  return
}
if (bal >= min && amount >= min && amount <= bal) {
  //go
  var hash = Math.round(new Date().getTime() / 1000)
  var investor = Bot.getProperty("investor", { list: {} })
  //new reinvest
  investor.list[hash] = {
    user: {
      telegramid: user.telegramid,
      invest_time: Date.now(),
      invest_amount: amount,
      hash: hash
    },
    currency: json_admin.currency
  }
  Bot.setProperty("investor", investor, "json")
  //user balance cut
  uses.list[user.telegramid] = {
    user: {
      balance: uses.list[user.telegramid].user.balance - amount,
      profit: uses.list[user.telegramid].user.profit,
      invested: uses.list[user.telegramid].user.invested + amount,
      affiliate: uses.list[user.telegramid].user.affiliate,
      withdraw: uses.list[user.telegramid].user.withdraw,
      refid: uses.list[user.telegramid].user.refid
    },
    history: uses.list[user.telegramid].user.history
  }
  Bot.setProperty("user", uses, "json")
  //started
  Api.sendMessage({
    text: ReplaceTextToVariable2(json_admin.deposit.text5),
    disable_web_page_preview: true,
    parse_mode: "html"
  })
  //channel
  Api.sendMessage({
    chat_id: json_admin.join.channel,
    text: ReplaceTextToVariable2(json_admin.deposit.text6),
    disable_web_page_preview: true,
    parse_mode: "html"
  })
} else {
  Bot.sendMessage(
    "❌ *You can not reinvest right now*: You need at least " +
      json_admin.withdraw.depomin +
      " " +
      json_admin.currency +
      " to reinvest!"
  )
}
//function
function ReplaceTextToVariable2(text) {
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var time = new Date()
  var date = Libs.DateTimeFormat.format(time, "dd/m/yyyy h:M:s T")
  var date2 = date + "M"
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(),
    telegramid: user.telegramid,
    mention: ValidMen(MentionName()),
    reflink: reflink,
    amount: amount,
    currency: json_admin.currency,
    time: date2
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  return newText
}
function ValidMen(d) {
  if (!d) {
    return ValidName()
  }
  return d
}

