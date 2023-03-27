/*CMD
  command: /Execute_DEPOSIT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: DEPOSIT 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var deposit = Bot.getProperty("deposit", { list: {} })
var depo = deposit.list[user.telegramid]
var json_admin = admin_info.list["admin"]
if (json_admin.admin == user.telegramid) {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.deposit.text),
    reply_markup: {
      inline_keyboard: [[{ text: "📝 Edit Text", callback_data: "/edxxxcc05" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.deposit.text2),
    reply_markup: {
      inline_keyboard: [
        [{ text: "📝 Edit Text", callback_data: "/edxxxcc05 go" }]
      ]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  if (!depo) {
    Bot.sendMessage("✋️*Hold on..... generating your deposit address...*")
    var callback = Libs.Webhooks.getUrlFor({
      command: "/OnGenerateDeposit",
      user_id: user.id
    })
    CryptoAdGateWayBot({
      api_key: json_admin.api_key,
      secret_key: json_admin.secret_key,
      currency: "DGB",
      callback: callback,
      name: "deposit"
    })
    return
  }
  Bot.sendMessage("`" + depo.address + "`")
  return
}
ApiRequest({
  text: ReplaceTextToVariable(json_admin.deposit.text),
  parse_mode: "html",
  disable_web_page_preview: true
})
ApiRequest({
  text: ReplaceTextToVariable(json_admin.deposit.text2),
  parse_mode: "html",
  disable_web_page_preview: true
})
if (!depo) {
  Bot.sendMessage("✋️*Hold on..... generating your deposit address...*")
  var callback = Libs.Webhooks.getUrlFor({
    command: "/OnGenerateDeposit",
    user_id: user.id
  })
  CryptoAdGateWayBot({
    api_key: json_admin.api_key,
    secret_key: json_admin.secret_key,
    currency: json_admin.currency,
    callback: callback,
    name: "deposit"
  })
  return
}
Bot.sendMessage("`" + depo.address + "`")
