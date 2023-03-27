/*CMD
  command: /edxxxcc01
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Editor
  answer: *Admin Editor*
  keyboard: Edit Text,Edit Channel\nCancel
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var data = admin_info.list["admin"]
if (data.admin == user.telegramid) {
  if (message == "Edit Text") {
    Bot.sendMessage("Enter new text example", {
      disable_web_page_preview: true
    })
  }
  if (message == "Edit Channel") {
    Bot.sendMessage("Enter new channel example", {
      disable_web_page_preview: true
    })
  }
  Bot.run({ command: "/edited", options: { name: message } })
}

