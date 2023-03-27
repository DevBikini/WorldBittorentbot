/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var info = Bot.getProperty("user", { list: {} })
var data = info.list[user.telegramid]
var global = info.list["global"]
//function variable
function ReplaceTextToVariable(text) {
  if (!global || !data) {
    return text
  }
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(),
    telegramid: user.telegramid,
    mention: MentionName(),
    reflink: reflink,
    balance: data.user.balance.toFixed(10),
    profit: data.user.profit.toFixed(10),
    invested: data.user.invested.toFixed(10),
    affiliate: data.user.affiliate.toFixed(10),
    withdraw: data.user.withdraw.toFixed(10),
    GlobalDays: global.days,
    GlobalUsers: global.users,
    GlobalWithdrawals: global.withdrawals.toFixed(7),
    GlobalDeposits: global.deposits.toFixed(7)
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  return newText
}
//function refid
function GetRefLinked(refid) {
  if (refid) {
    return refid
  }
  return 2110220740
}
//API SEND MESSAGE
function ApiRequest(data) {
  return Api.sendMessage(data)
}
//gateway
var url =
  "https://api.bots.business/v1/bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339"
function CryptoAdGateWayBot(data) {
  HTTP.post({
    url: url,
    body: data
  })
}
//function validname
function ValidName() {
  if (user.username) {
    return "@" + user.username
  }
  if (user.first_name) {
    return GetLinkNames(user.first_name)
  }
  return GetLinkNames(user.last_name)
}
//function mention name
function MentionName() {
  if (user.username) {
    return GetLinkNames(user.username)
  }
  if (user.first_name) {
    return
    GetLinkNames(user.first_name)
  }
  if (user.last_name) {
    return GetLinkNames(user.last_name)
  }
}
//function get linl
function GetLinkNames(names) {
  return "<a href='tg://user?id=" + user.telegramid + "'>" + names + "</a>"
}

