/*CMD
  command: /onwithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: WITHDRAW
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content)
if (json.error) {
  return Bot.sendMessage("ERROR: " + json.error.message)
}
var amount = json.amount
var currency = json.currency
var txid = json.hash
var wallet = json.to
var time = new Date()
var date = Libs.DateTimeFormat.format(time, "dd/m/yyyy h:M:s T")
var date2 = date + "M"
var user_info = Bot.getProperty("user", { list: {} })
var json_user = user_info.list[user.telegramid]
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var newHis =
  "<b>💯 Amount: </b><code>" +
  amount +
  " " +
  currency +
  "</code> \n<b>📆 Time:</b> <code>" +
  date2 +
  "</code>\n💳 <b>Wallet:</b> <code>" +
  wallet +
  "</code> \n📊 <b>Status:</b> <code>✅ Paid</code>\n<a href='https://tronscan.org/#/transaction/" +
  txid +
  "'>" +
  txid +
  "</a>\n\n"
//88
if (json_user.history) {
  var hist = json_user.history
} else {
  var hist = ""
}
user_info.list[user.telegramid] = {
  user: {
    balance: json_user.user.balance,
    profit: json_user.user.profit,
    invested: json_user.user.invested,
    affiliate: json_user.user.affiliate,
    withdraw: json_user.user.withdraw + amount,
    refid: json_user.user.refid
  },
  history: newHis + hist
}
Bot.setProperty("user", user_info, "json")
//global
var saveGlobal = Bot.getProperty("user", { list: {} })
var data_global = saveGlobal.list["global"]
//56
saveGlobal.list["global"] = {
  days: data_global.days,
  users: data_global.users,
  deposits: data_global.deposits,
  withdrawals: data_global.withdrawals + amount,
  runtime: data_global.runtime
}
Bot.setProperty("user", saveGlobal, "json")
Api.sendMessage({
  text: ReplaceTextToVariable2(json_admin.withdraw.text),
  disable_web_page_preview: true,
  parse_mode: "html"
})
//channel
Api.sendMessage({
  chat_id: json_admin.join.channel,
  text: ReplaceTextToVariable2(json_admin.withdraw.text2),
  disable_web_page_preview: true,
  parse_mode: "html"
})
//function
function ReplaceTextToVariable2(text) {
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(),
    telegramid: user.telegramid,
    mention: MentionName(),
    reflink: reflink,
    hash: txid,
    amount: amount,
    currency: currency,
    txid:
      "<a href='https://tronscan.org/#/transaction/" +
      txid +
      "'>" +
      txid +
      "</a>",
    time: date2,
    wallet: wallet
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  return newText
}var json = { amount: 1, currency: "BTT", hash: "test", to: "test hash" }
var amount = json.amount
var currency = json.currency
var txid = json.hash
var wallet = json.to
var time = new Date()
var date = Libs.DateTimeFormat.format(time, "dd/m/yyyy h:M:s T")
var date2 = date + "M"
var user_info = Bot.getProperty("user", { list: {} })
var json_user = user_info.list[user.telegramid]
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var newHis =
  "<b>💯 Amount: </b><code>" +
  amount +
  " " +
  currency +
  "</code> \n<b>📆 Time:</b> <code>" +
  date2 +
  "</code>\n💳 <b>Wallet:</b> <code>" +
  wallet +
  "</code> \n📊 <b>Status:</b> <code>✅ Paid</code>\n<a href='https://tronscan.org/#/transaction/" +
  txid +
  "'>" +
  txid +
  "</a>\n\n"
//88
if (json_user.history) {
  var hist = json_user.history
} else {
  var hist = ""
}
user_info.list[user.telegramid] = {
  user: {
    balance: json_user.user.balance,
    profit: json_user.user.profit,
    invested: json_user.user.invested,
    affiliate: json_user.user.affiliate,
    withdraw: json_user.user.withdraw + amount,
    refid: json_user.user.refid
  },
  history: newHis + hist
}
Bot.setProperty("user", user_info, "json")
//global
var saveGlobal = Bot.getProperty("user", { list: {} })
var data_global = saveGlobal.list["global"]
//56
saveGlobal.list["global"] = {
  days: data_global.days,
  users: data_global.users,
  deposits: data_global.deposits,
  withdrawals: data_global.withdrawals + amount,
  runtime: data_global.runtime
}
Bot.setProperty("user", saveGlobal, "json")
Api.sendMessage({
  text: ReplaceTextToVariable2(json_admin.withdraw.text),
  disable_web_page_preview: true,
  parse_mode: "html"
})
//channel
Api.sendMessage({
  chat_id: json_admin.join.channel,
  text: ReplaceTextToVariable2(json_admin.withdraw.text2),
  disable_web_page_preview: true,
  parse_mode: "html"
})
//function
function ReplaceTextToVariable2(text) {
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(),
    telegramid: user.telegramid,
    mention: MentionName(),
    reflink: reflink,
    hash: txid,
    amount: amount,
    currency: currency,
    txid:
      "<a href='https://tronscan.org/#/transaction/" +
      txid +
      "'>" +
      txid +
      "</a>",
    time: date2,
    wallet: wallet
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  return newText
}
