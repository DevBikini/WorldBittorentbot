/*CMD
  command: /admin_edited
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Editor
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var data = admin_info.list["admin"]
var secure =
  options.name == "welcometext" ||
  options.name == "channel" ||
  options.name == "starttext"
//welcome channel text
if (secure) {
  if (options.name == "welcometext") {
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
        text: message,
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
  }
  //channel link
  if (options.name == "channel") {
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
        channel: message
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
  }
  //welcome msg text
  if (options.name == "starttext") {
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
      start: { text: message },
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
  }
  Bot.sendMessage("*Successful changed*.")
  Bot.runCommand("/000adButtom")
  Bot.setProperty("admin", admin_info, "json")
  return
}
//info
if (options.name == "info") {
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
      text: message
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(message),
    reply_markup: {
      inline_keyboard: GetButton("info")
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
//deposit text
if (options.name == "deposittext") {
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
      text: message,
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(message),
    reply_markup: {
      inline_keyboard: [[{ text: "📝 Edit Text", callback_data: "/edxxxcc05" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
//deposit channel text
if (options.name == "depositchannel") {
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
      text2: message,
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(message),
    reply_markup: {
      inline_keyboard: [[{ text: "📝 Edit Text", callback_data: "/edxxxcc05" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
//ref
if (options.name == "ref") {
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
    referral: { text: message },
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(message),
    reply_markup: {
      inline_keyboard: [
        [{ text: "👫 Active Referrals", callback_data: "/My_Referrals" }],
        [{ text: "📝 Edit Text", callback_data: "/edxxxcc03" }]
      ]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
//supportlink
if (options.name == "supportlink") {
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
    support: { text: data.support.text, link: message },
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(data.support.text),
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Support", url: message },
          { text: "Developer", url: "https://t.me/Dev_Bikini" }
        ],
        [
          { text: "📝 Edit Text", callback_data: "/edxxxcc04" },
          { text: "📝 Edit SupportLink", callback_data: "/edxxxcc04 go" }
        ]
      ]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
//support
if (options.name == "support") {
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
    support: { text: message, link: data.support.link },
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
  Api.editMessageText({
    message_id: options.message_id,
    text: ReplaceTextToVariable(message),
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Support", url: data.support.link },
          { text: "Developer", url: "https://t.me/Dev_Bikini" }
        ],
        [
          { text: "📝 Edit Text", callback_data: "/edxxxcc04" },
          { text: "📝 Edit SupportLink", callback_data: "/edxxxcc04 go" }
        ]
      ]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
Api.deleteMessage({ message_id: request.message_id })
Bot.setProperty("admin", admin_info, "json")
