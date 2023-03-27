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
  if (json_admin.admin == user.telegramid) {
    ApiRequest({
      text: ReplaceTextToVariable(json_admin.start.text),
      reply_markup: {
        //resize_keyboard: true,
        keyboard: [
          [{ text: "INFO" }],
          [{ text: "DEPOSIT" }, { text: "WITHDRAW" }],
          [{ text: "REFFERRALS" }, { text: "SUPPORT" }]
        ]
      },
      parse_mode: "html",
      disable_web_page_preview: true
    })
    return
  }
  ApiRequest({
    text: ReplaceTextToVariable(json_admin.start.text),
    reply_markup: {
      // resize_keyboard: true,
      keyboard: [
        [{ text: "INFO" }],
        [{ text: "DEPOSIT" }, { text: "WITHDRAW" }],
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

