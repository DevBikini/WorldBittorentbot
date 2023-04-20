/*CMD
  command: /CheckChannel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ✅ Joined
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = options.result.status
var admin_info = Bot.getProperty("admin", { list: {} })
var info = Bot.getProperty("user", { list: {} })
var json_admin = admin_info.list["admin"]
if (
  (status == "member") |
  (status == "administrator") |
  (status == "creator")
) {
  //global save
  var saveGlobal = Bot.getProperty("user", { list: {} })
  var global = saveGlobal.list["global"]
  if (!global) {
    var users = 1
    var day = 1
    var timeStart = Date.now()
    var depo = 0
    var wd = 0
  } else {
    var users = global.users
    var day = global.days
    var timeStart = global.runtime
    var depo = global.deposits
    var wd = global.withdrawals
  }
  if (canRun(timeStart)) {
    var dayTime = day + 1
    var newTime = Date.now()
  } else {
    var dayTime = day
    var newTime = timeStart
  }
  saveGlobal.list["global"] = {
    days: dayTime,
    users: users + 1,
    deposits: depo,
    withdrawals: wd,
    runtime: newTime
  }
  Bot.setProperty("user", saveGlobal, "json")
  //welcome Bonus
  var DataUser = Bot.getProperty("user", { list: {} })
  var bonUser = info.list[user.telegramid]
  var bonus = json_admin.welcomeB
  if (bonus) {
    ApiRequest({
      text: "🎁 <b>Welcome Bonus:</b> +" + bonus + " " + json_admin.currency,
      parse_mode: "html"
    })
    info.list[user.telegramid] = {
      user: {
        balance: bonUser.user.balance + parseFloat(bonus),
        profit: bonUser.user.profit,
        invested: bonUser.user.invested,
        affiliate: bonUser.user.affiliate,
        withdraw: bonUser.user.withdraw,
        refid: bonUser.user.refid,
        telegramid: user.telegramid
      },
      history: bonUser.history
    }
    Bot.setProperty("user", DataUser, "json")
  }
  if (json_admin.admin == user.telegramid) {
    ApiRequest({
      text: ReplaceTextToVariable(json_admin.start.text),
      reply_markup: {
        //resize_keyboard: true,
        keyboard: [
          [{ text: "INFO" }],
          [{ text: "DEPOSIT" }, { text: "RE-INVEST" }, { text: "WITHDRAW" }],
          [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
        ]
      },
      parse_mode: "html",
      disable_web_page_preview: true
    })
    return
  }
  //referral bonus
  var info = Bot.getProperty("user", { list: {} })
  var hd = info.list[user.telegramid]
  var RefB = json_admin.RefB
  if (RefB) {
    ApiRequest({
      chat_id: hd.user.refid,
      text: "➕ <b>Referral Bonus:</b> +" + RefB + " " + json_admin.currency,
      parse_mode: "html"
    })
    var hdd = info.list[hd.user.refid]
    info.list[hdd.user.refid] = {
      user: {
        balance: hdd.user.balance + parseFloat(RefB),
        profit: hdd.user.profit,
        invested: hdd.user.invested,
        affiliate: hdd.user.affiliate + parseFloat(RefB),
        withdraw: hdd.user.withdraw,
        refid: hdd.user.refid,
        telegramid: user.telegramid
      },
      history: hdd.history
    }
    Bot.setProperty("user", info, "json")
  }
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.start.text),
    reply_markup: {
      // resize_keyboard: true,
      keyboard: [
        [{ text: "INFO" }],
        [{ text: "DEPOSIT" }, { text: "RE-INVEST" }, { text: "WITHDRAW" }],
        [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
      ]
    },
    parse_mode: "html"
  })
  User.setProperty("join", { yes: true }, "json")
  return
}
if (status == "left") {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.join.text),
    reply_markup: {
      resize_keyboard: true,
      keyboard: [[{ text: "✅ Joined" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
var status = options.result.status
var admin_info = Bot.getProperty("admin", { list: {} })
if (
  (status == "member") |
  (status == "administrator") |
  (status == "creator")
) {
  //global save
  var saveGlobal = Bot.getProperty("user", { list: {} })
  var global = saveGlobal.list["global"]
  if (!global) {
    var users = 1
    var day = 1
    var timeStart = Date.now()
    var depo = 0
    var wd = 0
  } else {
    var users = global.users
    var day = global.days
    var timeStart = global.runtime
    var depo = global.deposits
    var wd = global.withdrawals
  }
  if (canRun(timeStart)) {
    var dayTime = day + 1
    var newTime = Date.now()
  } else {
    var dayTime = day
    var newTime = timeStart
  }
  saveGlobal.list["global"] = {
    days: dayTime,
    users: users + 1,
    deposits: depo,
    withdrawals: wd,
    runtime: newTime
  }
  Bot.setProperty("user", saveGlobal, "json")
  //welcome Bonus
  var DataUser = Bot.getProperty("user", { list: {} })
var json_admin = admin_info.list["admin"]
  var bonUser = info.list[user.telegramid]
  var bonus = json_admin.welcomeB
  if (bonus) {
    ApiRequest({
      text: "🎁 <b>Welcome Bonus:</b> +" + bonus + " " + json_admin.currency,
      parse_mode: "html"
    })
    info.list[user.telegramid] = {
      user: {
        balance: bonUser.user.balance + parseFloat(bonus),
        profit: bonUser.user.profit,
        invested: bonUser.user.invested,
        affiliate: bonUser.user.affiliate,
        withdraw: bonUser.user.withdraw,
        refid: bonUser.user.refid,
        telegramid: user.telegramid
      },
      history: bonUser.history
    }
    Bot.setProperty("user", DataUser, "json")
  }
  if (json_admin.admin == user.telegramid) {
    ApiRequest({
      text: ReplaceTextToVariable(json_admin.start.text),
      reply_markup: {
        //resize_keyboard: true,
        keyboard: [
          [{ text: "INFO" }],
          [{ text: "DEPOSIT" }, { text: "RE-INVEST" }, { text: "WITHDRAW" }],
          [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
        ]
      },
      parse_mode: "html",
      disable_web_page_preview: true
    })
    return
  }
  //referral bonus
  var hd = info.list[user.telegramid]
  var RefB = json_admin.RefB
  if (RefB) {
    ApiRequest({
      chat_id: hd.user.refid,
      text: "➕ <b>Referral Bonus:</b> +" + RefB + " " + json_admin.currency,
      parse_mode: "html"
    })
    var hdd = info.list[hd.user.refid]
    info.list[hdd.user.refid] = {
      user: {
        balance: hdd.user.balance + parseFloat(RefB),
        profit: hdd.user.profit,
        invested: hdd.user.invested,
        affiliate: hdd.user.affiliate + parseFloat(RefB),
        withdraw: hdd.user.withdraw,
        refid: hdd.user.refid,
        telegramid: user.telegramid
      },
      history: hdd.history
    }
    Bot.setProperty("user", info, "json")
  }
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.start.text),
    reply_markup: {
      // resize_keyboard: true,
      keyboard: [
        [{ text: "INFO" }],
        [{ text: "DEPOSIT" }, { text: "RE-INVEST" }, { text: "WITHDRAW" }],
        [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
      ]
    },
    parse_mode: "html"
  })
  User.setProperty("join", { yes: true }, "json")
  return
}
if (status == "left") {
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.join.text),
    reply_markup: {
      resize_keyboard: true,
      keyboard: [[{ text: "✅ Joined" }]]
    },
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}

