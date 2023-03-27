/*CMD
  command: /edited
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
//currency
if (options.name == "Edit currency") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.setProperty("admin", admin_info, "json")
  Bot.sendMessage("*Currency Successful changed*.")
}
//join text
if (options.name == "Edit Text") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.setProperty("admin", admin_info, "json")
  Bot.sendMessage("*Join Text Successful changed*.")
}
//join channel
if (options.name == "Edit Channel") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Channel Successful changed*.")
}
//new line
if (options.name == "Edit Info") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Info Text Successful changed*.")
}
//new line
if (options.name == "Edit Referrals") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Referral Text Successful changed*.")
}
//new line
if (options.name == "Edit Support") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Support Text Successful changed*.")
}
//new line
if (options.name == "Edit SupportLink") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Support Link Successful changed*.")
}
//new line
if (options.name == "Edit Deposit text") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.setProperty("admin", admin_info, "json")
  Bot.sendMessage("*Deposit text Successful changed*.")
}
//new line
if (options.name == "Edit Deposit text2") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Deposit text Successful changed*.")
}
//new line
if (options.name == "Edit apikey") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      deposit: data.withdraw.deposit,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Api Key Successful changed*.")
}
//new line
if (options.name == "Edit secretkey") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Secret Key Successful changed*.")
}
//new line
if (options.name == "Edit deposittext3") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*deposit text Successful changed*.")
}
//new line
if (options.name == "Edit deposittext4") {
  admin_info.list["admin"] = {
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
      text4: message
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*deposit channel text Successful changed*.")
}
//new line
if (options.name == "Edit min.") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: message,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Withdraw Min Successful changed*.")
}
//new line
if (options.name == "Edit max.") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: message,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Refferal Commission Successful changed*.")
}
//new line
if (options.name == "Edit mindepo.") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: message,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Deposit Min Successful changed*.")
}
//withdrawTexChannel
if (options.name == "Edit withdrawTex") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: message,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Withdraw Text Successful changed*.")
}
//new line
if (options.name == "Edit withdrawTexChannel") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: message
    }
  }
  Bot.sendMessage("*Withdraw Text Channel Successful changed*.")
}
//new line
if (options.name == "Edit InvestPlan") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Investment Plan Successful changed*.")
}
//new line
if (options.name == "Edit Invest") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Investment Successful changed*.")
}
//startText
if (options.name == "startText") {
  admin_info.list["admin"] = {
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
      text4: data.deposit.text4
    },
    withdraw: {
      minimum: data.withdraw.minimum,
      maximum: data.withdraw.maximum,
      depomin: data.withdraw.depomin,
      text: data.withdraw.text,
      text2: data.withdraw.text2
    }
  }
  Bot.sendMessage("*Start Text Successful changed*.")
}
Bot.setProperty("admin", admin_info, "json")
Bot.runCommand("/start")
