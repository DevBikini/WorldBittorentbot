/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
if (json_admin.admin == user.telegramid) {
  ApiRequest({
    text:
      "Welcome admin\n\n*Current setup*\n👉 *Currency*: `" +
      json_admin.currency +
      "`\n👉 *Api key*: `" +
      json_admin.api_key +
      "`\n👉 *Secret key*: `" +
      json_admin.secret_key +
      "`\n👉 *Minimum Withdraw*: `" +
      json_admin.withdraw.minimum +
      "`\n👉 *Referral commission*: `" +
      json_admin.withdraw.maximum +
      "%`\n👉 *Minimum Deposit*: `" +
      json_admin.withdraw.depomin +
      "`\n\n/transfer - transfer bot",
    reply_markup: {
      inline_keyboard: [
        [{ text: "Change Currency", callback_data: "/change cc" }],
        [
          { text: "Change API Key", callback_data: "/change cak" },
          { text: "Change Secret Key", callback_data: "/change csk" }
        ],
        [
          {
            text: "Change Text Deposit",
            callback_data: "/change ctd"
          },
          { text: "Change Text Deposit Channel", callback_data: "/change ctdc" }
        ],
        [
          {
            text: "Change Text Withdrawal",
            callback_data: "/change ctw"
          },
          {
            text: "Change Text Withdrawal Channel",
            callback_data: "/change ctwc"
          }
        ],
        [
          {
            text: "Min. Wd",
            callback_data: "/change mwd1"
          },
          {
            text: "Min. Depo",
            callback_data: "/change md"
          }
        ],
        [
          {
            text: "Referral commission",
            callback_data: "/change mwd2"
          }
        ]
      ]
    },
    parse_mode: "markdown",
    disable_web_page_preview: true
  })

  return
}

