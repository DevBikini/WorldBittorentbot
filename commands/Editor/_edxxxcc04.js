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
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "Enter new Support Link Must start `https://t.me/name`",
    disable_web_page_preview: true,
    parse_mode: "markdown"
  })
  Bot.run({
    command: "/admin_edited",
    options: { name: "supportlink", message_id: request.message.message_id }
  })
  return
}
Api.editMessageText({
  message_id: request.message.message_id,
  text: "Enter new text [example](https://t.me/DevBikini/62)",
  disable_web_page_preview: true,
  parse_mode: "markdown"
})
Bot.run({
  command: "/admin_edited",
  options: { name: "support", message_id: request.message.message_id }
})

