/*CMD
  command: /edxxxcc05
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  Bot.sendMessage("Enter new text [example](https://t.me/DevBikini/60)", {
    disable_web_page_preview: true
  })
  Bot.run({ command: "/edited", options: { name: "Edit Deposit text" } })
  return
}
Bot.sendMessage("Enter new text [example](https://t.me/DevBikini/60)", {
      disable_web_page_preview: true
    })
Bot.run({ command: "/edited", options: { name: "Edit Deposit text2" } })

