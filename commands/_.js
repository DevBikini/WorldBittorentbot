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

//global
var saveGlobal = Bot.getProperty("user", { list: {} })
var global = saveGlobal.list["global"]
if (global) {
  if (canRun(global.runtime)) {
    saveGlobal.list["global"] = {
      days: global.days + 1,
      users: global.users,
      deposits: global.deposits,
      withdrawals: global.withdrawals,
      runtime: Date.now()
    }
    Bot.setProperty("user", saveGlobal, "json")
  }
}
var admin_info = Bot.getProperty("admin", { list: {} })
var admin = admin_info.list["admin"].admin
var text =
  ("INFO" == message) |
  ("REFFERRALS" == message) |
  ("SUPPORT" == message) |
  ("DEPOSIT" == message) |
  ("WITHDRAW" == message) |
  ("RE-INVEST" == message)
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

