/*CMD
  command: /Execute_WITHDRAW
  help: 
  need_reply: 
  auto_retry_time: 
  folder: WITHDRAW

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var uses = Bot.getProperty("user", { list: {} })
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var data = uses.list[user.telegramid]
var bal = data.balance
var mini = json_admin.withdraw.minimum
var cur = json_admin.currency
if (bal >= mini) {
  var p =
    "📤 *How many " +
    cur +
    " you want to withdraw?*\n\n    *Minimum:* " +
    mini +
    " " +
    cur +
    "\n    *Maximum:* " +
    bal +
    " " +
    cur +
    "\n    _Maximum amount corresponds to your balance_\n\n    ➡* Send now the amount of  you want to withdraw*"
  Bot.sendKeyboard("🔙 Back", p)
  Bot.runCommand("/wdprivate")
  return
}
Bot.sendMessage(
  "❌ *You have to own at least " +
    mini +
    " " +
    cur +
    " in your wallet to withdraw!*"
)
