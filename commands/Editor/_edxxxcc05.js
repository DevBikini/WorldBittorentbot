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
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "Enter new text [example](https://t.me/DevBikini/62)",
    parse_mode: "markdown",
    disable_web_page_preview: true
  })
  Bot.run({
    command: "/admin_edited",
    options: { name: "deposittext", message_id: request.message.message_id }
  })
  return
}
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter new text [example](https://t.me/DevBikini/62)",
  parse_mode: "markdown",
  disable_web_page_preview: true
})
Bot.run({
  command: "/admin_edited",
  options: { name: "depositchannel", message_id: request.message.message_id }
})

