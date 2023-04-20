/*CMD
  command: /Go_edit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var currency = json_admin.currency
var api_key = json_admin.api_key
var secret_key = json_admin.secret_key
if (params == "currency") {
  var button = [
    [{ text: "Currency", callback_data: "/change cc" }],
    [
      { text: "Api Key", callback_data: "/change cak" },
      { text: "Secret Key", callback_data: "/change csk" }
    ],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Currency: <code>" +
    currency +
    "</code>\n\n>Api key: <code>" +
    api_key +
    "</code>\n\n>Secret key: <code>" +
    secret_key +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      currency: currency,
      secret_key: secret_key,
      api_key: api_key,
      button: button
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
//withdraw
if (params == "withdraw") {
  var minimum_withdraw = json_admin.withdraw.minimum
  var button = [
    [{ text: "Text Withdrawal", callback_data: "/change ctw" }],
    [
      { text: "Minimum Withdraw", callback_data: "/change mwd1" },
      { text: "Text Channel Withdrawal", callback_data: "/change ctwc" }
    ],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Minimum withdraw: <code>" +
    minimum_withdraw +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: button,
      minimum_withdraw: minimum_withdraw
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
//re invest
if (params == "reinvest") {
  var button = [
    [{ text: "Text Re-Investment", callback_data: "/change re-in" }],
    [{ text: "Text Channel Re-Investment", callback_data: "/change re-ch" }],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var text = "<b>🟢 Here you can Manage your setup</b>."
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: button
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
//deposit
if (params == "deposit") {
  var minimum_deposit = json_admin.withdraw.depomin
  var button = [
    [{ text: "Text Deposit", callback_data: "/change ctd" }],
    [
      { text: "Minimum Deposit", callback_data: "/change md" },
      { text: "Text Channel Deposit", callback_data: "/change ctdc" }
    ],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Minimum Deposit: <code>" +
    minimum_deposit +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: button,
      minimum_deposit: minimum_deposit
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
//Bonus
if (params == "bonus") {
  var button = [
    [{ text: "Referral Commission", callback_data: "/change mwd2" }],
    [
      { text: "Referral Bonus", callback_data: "/change rb" },
      { text: "Welcome Bonus", callback_data: "/change wb" }
    ],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var refcom = json_admin.withdraw.maximum
  var refbon = json_admin.RefB
  var welbon = json_admin.welcomeB
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Referral Commission: <code>" +
    refcom +
    "</code>\n\n>Referral Bonus: <code>" +
    refbon +
    "</code>\n\n>Welcome Bonus: <code>" +
    welbon +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: button,
      refcom: refcom,
      refbon: refbon,
      welbon: welbon
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
//Investment
if (params == "investment") {
  var button = [
    [{ text: "Investment Plan", callback_data: "/change ip" }],
    [
      { text: "Investment", callback_data: "/change im" },
      { text: "Investment Expired", callback_data: "/change expin" }
    ],
    [{ text: "🔙 Back", callback_data: "/admin back" }]
  ]
  var invest_plan = json_admin.plan
  var invest = json_admin.invest
  var invest_exp = json_admin.exp
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Investment Plan: <code>" +
    invest_plan +
    "%</code>\n\n>Investment: <code>" +
    invest +
    " Hour's</code>\n<b>-investment ready collect in  hour.</b>\n\n>Investment Expired: <code>" +
    invest_exp +
    " Time's</code>\n<b>-set 0 to lifetime investment</b>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: button,
      invest_plan: invest_plan,
      invest: invest,
      invest_exp: invest_exp
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: button
    }
  })
  return
}
