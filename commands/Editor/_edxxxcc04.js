/*CMD
  command: /edxxxcc04
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (params) {
  Bot.sendMessage("Enter new Support Link Must start `https://t.me/name`")
  Bot.run({ command: "/edited", options: { name: "Edit SupportLink" } })
  return
}
Bot.sendMessage("Enter new text example")
Bot.run({ command: "/edited", options: { name: "Edit Support" } })

