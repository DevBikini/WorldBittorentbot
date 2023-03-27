/*CMD
  command: /deposited
  help: 
  need_reply: 
  auto_retry_time: 
  folder: DEPOSIT 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = { amount: 1, currency: "BTT", hash: "test" }
var investor = Bot.getProperty("investor", { list: {} })
var investor2 = Bot.getProperty("my_investment", { list: {} })
var data = Bot.getProperty("active_referral", { list: {} })
var udot = Bot.getProperty("user", { list: {} })
var my_udot = Bot.getProperty("user", { list: {} })
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var referid = udot.list[user.telegramid]
var time = new Date()
var date = Libs.DateTimeFormat.format(time, "dd/m/yyyy h:M:s T")
var date2 = date + "M"
var new_history =
  "⏱<b>Date: </b><code>" +
  date2 +
  "</code>\n💰 <b>Amount: </b><code>" +
  json.amount +
  "</code>" +
  " <b>" +
  json.currency +
  "</b>\n<b>📈 Status: </><code>✅ Active</code>\n\n"
if (investor2.list[user.telegramid]) {
  var newht = investor2.list[user.telegramid].history
} else {
  var newht = ""
}
if (json.hash) {
  //new deposit
  investor.list[json.hash] = {
    user: {
      telegramid: user.telegramid,
      invest_time: Date.now(),
      invest_amount: json.amount,
      hash: json.hash
    },
    currency: json.currency
  }
  Bot.setProperty("investor", investor, "json")
  //investor
  investor2.list[user.telegramid] = {
    history: new_history + newht
  }
  Bot.setProperty("my_investment", investor2, "json")
  var ci = json_admin.withdraw.maximum * 1
  var gf = ci / 100
  var amnt = json.amount * gf
  var ui =
    '<a href="tg://user?id=' +
    user.telegramid +
    '">' +
    user.telegramid +
    "</a>"
  //5
  var new_active = "➕ " + amnt + " " + json.currency + " from: " + ui + "\n"
  //have ac
  if (data.list[referid.user.refid]) {
    var haveAc = data.list[referid.user.refid].active
  } else {
    var haveAc = ""
  }
  data.list[referid.user.refid] = {
    active: new_active + haveAc
  }
  Bot.setProperty("active_referral", data, "json")
  Api.sendMessage({
    chat_id: referid.user.refid,
    text: new_active,
    parse_mode: "html"
  })
  //referral balance add
  udot.list[referid.user.refid] = {
    user: {
      balance: udot.list[referid.user.refid].user.balance + amnt,
      profit: udot.list[referid.user.refid].user.profit,
      invested: udot.list[referid.user.refid].user.invested,
      affiliate: udot.list[referid.user.refid].user.affiliate + amnt,
      withdraw: udot.list[referid.user.refid].user.withdraw,
      refid: udot.list[referid.user.refid].user.refid
    },
    history: udot.list[referid.user.refid].history
  }
  Bot.setProperty("user", udot, "json")
  //my udot
  my_udot.list[user.telegramid] = {
    user: {
      balance: my_udot.list[user.telegramid].user.balance,
      profit: my_udot.list[user.telegramid].user.profit,
      invested: my_udot.list[user.telegramid].user.invested + json.amount,
      affiliate: my_udot.list[user.telegramid].user.affiliate,
      withdraw: my_udot.list[user.telegramid].user.withdraw,
      refid: my_udot.list[user.telegramid].user.refid
    },
    history: my_udot.list[user.telegramid].user.history
  }
  Bot.setProperty("user", my_udot, "json")
  //global
  var saveGlobal = Bot.getProperty("user", { list: {} })
  var data_global = saveGlobal.list["global"]
  //56
  saveGlobal.list["global"] = {
    days: data_global.days,
    users: data_global.users,
    deposits: data_global.deposits + json.amount,
    withdrawals: data_global.withdrawals,
    runtime: data_global.runtime
  }
  Bot.setProperty("user", saveGlobal, "json")
  //started
  Api.sendMessage({
    text: ReplaceTextToVariable2(json_admin.deposit.text3),
    disable_web_page_preview: true,
    parse_mode: "html"
  })
  //channel
  Api.sendMessage({
    chat_id: json_admin.join.channel,
    text: ReplaceTextToVariable2(json_admin.deposit.text4),
    disable_web_page_preview: true,
    parse_mode: "html"
  })
  return
}
//function
function ReplaceTextToVariable2(text) {
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(user),
    telegramid: user.telegramid,
    mention: MentionName(user),
    reflink: reflink,
    hash: json.hash,
    amount: json.amount,
    currency: json.currency,
    time: date2
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  return newText
}

