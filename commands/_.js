/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var admin = admin_info.list["admin"].admin
var text =
  ("INFO" == message) |
  ("REFFERRALS" == message) |
  ("SUPPORT" == message) |
  ("DEPOSIT" == message) |
  ("WITHDRAW" == message)
if (text) {
  var joined = User.getProperty("join")
  if (joined || admin == user.telegramid) {
    //run command
    Bot.runCommand("/Execute_" + message)
    return
  }
}
var editor = message == "📝 Edit Join"
if (editor) {
  if (admin == user.telegramid) {
    Bot.runCommand("/edxxxcc01")
  }
  return
}

