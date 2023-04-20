/*CMD
  command: /edited
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = options.message_id
var edit = Bot.getProperty("Go_editText")
var admin_info = Bot.getProperty("admin", { list: {} })
var data = admin_info.list["admin"]
//currency
if (options.name == "Edit currency") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: message,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Currency: <code>" +
    message +
    "</code>\n\n>Api key: <code>" +
    edit.api_key +
    "</code>\n\n>Secret key: <code>" +
    edit.secret_key +
    "</code>"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      currency: message,
      secret_key: edit.secret_key,
      api_key: edit.api_key,
      button: edit.button
    },
    "json"
  )
}
//Api key
if (options.name == "Edit apikey") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: message,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      deposit: data.withdraw.deposit,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Currency: <code>" +
    edit.currency +
    "</code>\n\n>Api key: <code>" +
    message +
    "</code>\n\n>Secret key: <code>" +
    edit.secret_key +
    "</code>"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      currency: edit.currency,
      secret_key: edit.secret_key,
      api_key: message,
      button: edit.button
    },
    "json"
  )
}
//Secret Key
if (options.name == "Edit secretkey") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: message,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Currency: <code>" +
    edit.currency +
    "</code>\n\n>Api key: <code>" +
    edit.api_key +
    "</code>\n\n>Secret key: <code>" +
    message +
    "</code>"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      currency: edit.currency,
      secret_key: message,
      api_key: edit.api_key,
      button: edit.button
    },
    "json"
  )
}
//Withdrawal Text
if (options.name == "Edit withdrawTex") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: message,
      text2: data.withdraw.text2
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      minimum_withdraw: edit.minimum_withdraw,
      button: edit.button
    },
    "json"
  )
}
//Minimum Withdrawal
if (options.name == "Edit min.") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: message,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Minimum Withdraw: <code>" +
    message +
    "</code>"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      minimum_withdraw: message,
      button: edit.button
    },
    "json"
  )
}
//Withdrawal Channel Text
if (options.name == "Edit withdrawTexChannel") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: message
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      minimum_withdraw: edit.minimum_withdraw,
      button: edit.button
    },
    "json"
  )
}
//Re-Invesment Text
if (options.name == "Re-in") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: message,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      button: edit.button
    },
    "json"
  )
}
//Re-Invesment Channel Text
if (options.name == "Re-ch") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: message
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      button: edit.button
    },
    "json"
  )
}
//Deposit Text
if (options.name == "Edit deposittext3") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: message,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      minimum_deposit: edit.minimun_depodit,
      button: edit.button
    },
    "json"
  )
}
//Deposit channel Text
if (options.name == "Edit deposittext4") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: message,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Api.editMessageText({
    message_id: message_id,
    text: edit.text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: edit.text,
      minimum_deposit: edit.minimun_depodit,
      button: edit.button
    },
    "json"
  )
}
//minimum Deposit
if (options.name == "Edit mindepo.") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: message,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup.</b>\n\n>Minimum Deposit: <code>" +
    message +
    "</code>"
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      minimum_deposit: message,
      button: edit.button
    },
    "json"
  )
}
//Refcom
if (options.name == "Edit max.") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: message,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Referral Commission: <code>" +
    message +
    "</code>\n\n>Referral Bonus: <code>" +
    edit.refbon +
    "</code>\n\n>Welcome Bonus: <code>" +
    edit.welbon +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      refcom: message,
      refbon: edit.refbon,
      welbon: edit.welbon
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
//RefB
if (options.name == "Edit RefB") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomeB,
    RefB: message,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Referral Commission: <code>" +
    edit.refcom +
    "</code>\n\n>Referral Bonus: <code>" +
    message +
    "</code>\n\n>Welcome Bonus: <code>" +
    edit.welbon +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      refcom: edit.refcom,
      refbon: message,
      welbon: edit.welbon
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
//WelB
if (options.name == "Edit WelB") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: message,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Referral Commission: <code>" +
    edit.refcom +
    "</code>\n\n>Referral Bonus: <code>" +
    edit.refbon +
    "</code>\n\n>Welcome Bonus: <code>" +
    message +
    "</code>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      refcom: edit.refcom,
      refbon: edit.refbon,
      welbon: message
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
//Edit Invest
if (options.name == "Edit Invest") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomB,
    RefB: data.RefB,
    plan: data.plan,
    invest: message,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Investment Plan: <code>" +
    edit.invest_plan +
    "%</code>\n\n>Investment: <code>" +
    message +
    " Hour's</code>\n<b>-investment ready collect in  hour.</b>\n\n>Investment Expired: <code>" +
    edit.invest_exp +
    " Time's</code>\n<b>-set 0 to lifetime investment</b>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      invest_plan: edit.invest_plan,
      invest: message,
      invest_exp: edit.invest_exp
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
//Edit InvestExp
if (options.name == "Edit InvestExp") {
  admin_info.list["admin"] = {
    exp: message,
    welcomeB: data.welcomB,
    RefB: data.RefB,
    plan: data.plan,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Investment Plan: <code>" +
    edit.invest_plan +
    "%</code>\n\n>Investment: <code>" +
    edit.invest +
    " Hour's</code>\n<b>-investment ready collect in  hour.</b>\n\n>Investment Expired: <code>" +
    message +
    " Time's</code>\n<b>-set 0 to lifetime investment</b>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      invest_plan: edit.invest_plan,
      invest: edit.invest,
      invest_exp: message
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
//Edit InvestPlan
if (options.name == "Edit InvestPlan") {
  admin_info.list["admin"] = {
    exp: data.exp,
    welcomeB: data.welcomB,
    RefB: data.RefB,
    plan: message,
    invest: data.invest,
    api_key: data.api_key,
    secret_key: data.secret_key,
    admin: user.telegramid,
    currency: data.currency,
    start: { text: data.start.text },
    join: {
      text: data.join.text,
      channel: data.join.channel
    },
    info: {
      text: data.info.text
    },
    referral: { text: data.referral.text },
    support: { text: data.support.text, link: data.support.link },
    deposit: {
      text: data.deposit.text,
      text2: data.deposit.text2,
      text3: data.deposit.text3,
      text4: data.deposit.text4,
      text5: data.deposit.text5,
      text6: data.deposit.text6
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  var text =
    "<b>🟢 Here you can Manage your setup</b>.\n\n>Investment Plan: <code>" +
    message +
    "%</code>\n\n>Investment: <code>" +
    edit.invest +
    " Hour's</code>\n<b>-investment ready collect in  hour.</b>\n\n>Investment Expired: <code>" +
    edit.invest_exp +
    " Time's</code>\n<b>-set 0 to lifetime investment</b>"
  Bot.setProperty(
    "Go_editText",
    {
      text: text,
      button: edit.button,
      invest_plan: message,
      invest: edit.invest,
      invest_exp: edit.invest_exp
    },
    "json"
  )
  Api.editMessageText({
    message_id: message_id,
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: edit.button
    }
  })
}
Api.deleteMessage({ message_id: request.message_id })
Bot.setProperty("admin", admin_info, "json")
