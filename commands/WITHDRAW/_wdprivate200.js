/*CMD
  command: /wdprivate200
  help: 
  need_reply: true
  auto_retry_time: 
  folder: WITHDRAW
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var user_info = Bot.getProperty("user", { list: {} })
var json_user = user_info.list[user.telegramid]
//remove balance
var json_admin = admin_info.list["admin"]
var api_key = json_admin.api_key
var secret_key = json_admin.secret_key
var amount = options.amount
var address = message
var currency = json_admin.currency
user_info.list[user.telegramid] = {
  user: {
    balance: json_user.user.balance - amount,
    profit: json_user.user.profit,
    invested: json_user.user.invested,
    affiliate: json_user.user.affiliate,
    withdraw: json_user.user.withdraw + amount,
    refid: json_user.user.refid
  },
  history: json_user.history
}
Bot.setProperty("user", user_info, "json")
//global
var saveGlobal = Bot.getProperty("user", { list: {} })
var data_global = saveGlobal.list["global"]
saveGlobal.list["global"] = {
  days: data_global.days,
  users: data_global.users,
  deposits: data_global.deposits,
  withdrawals: data_global.withdrawals + amount,
  runtime: data_global.runtime
}
Bot.setProperty("user", saveGlobal, "json")
var callback = Libs.Webhooks.getUrlFor({
  command: "/onwithdraw",
  user_id: user.id
})
CryptoAdGateWayBot({
  api_key: api_key,
  secret_key: secret_key,
  amount: amount,
  address: address,
  currency: currency,
  callback: callback,
  name: "withdraw"
})
Bot.sendMessage(
  "✅* Withdrawal Requested*\nYour payment is being processed automatically right now!\n\n_You will receive TXID soon_" +
    "\n\n💳 *Transaction Details:* " +
    amount +
    " " +
    currency +
    " to the wallet\n" +
    "`" +
    address +
    "`"
)

