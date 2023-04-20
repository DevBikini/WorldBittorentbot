/*CMD
  command: /transfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Please Choose new and old

New - new data
Old - current data
  ANSWER
  keyboard: New data, Old data\nCancel
  aliases: 
CMD*/

if (message == "New data") {
  var newT = Bot.getProperty("admink", { list: {} })
  newT.list["admin"] = {
    exp: 0,
    plan: 1,
    invest: 24,
    api_key: "",
    secret_key: "",
    admin: user.telegramid,
    currency: "BTT",
    start: { text: "welcome to %botname%" },
    join: {
      text:
        "💡 <b>To use this bot you must join this channel:</b> @CryptoAdAlert",
      channel: "@CryptoAdAlert"
    },
    info: {
      text:
        "👤 <b>Account Info</b>:\n\n<b>➖ Withdrawable Balance</b>:\n  %balance% <b>BTT</b>\n\n<b>💳 Active Investments</b>:\n  %invested% <b>BTT</b>\n\n<b>💰 Total Profit</b>:\n  %profit% <b>BTT</b>\n\n<b>🎁 Total Affiliate Bonus</b>:\n  %affiliate% <b>BTT</b>\n\n<b>💸  Total Withdrawn</b>:\n  %withdraw% <b>BTT</b>"
    },
    referral: {
      text:
        "<b>Referrals Link</b>:\n%reflink%\n\n<b>📊 STATISTICS</b>\n<b>Online</b>\n  %GlobalDays% Days\n<b>User</b>\n  %GlobalUsers% Users\n<b>DEPOSIT</b>\n  %GlobalDeposits% BTT\n<b>WITHDRAW</b>\n  %GlobalWithdrawals% BTT"
    },
    support: { text: "contact", link: "https://t.me/Dev_Bikini" },
    deposit: {
      text:
        "➕ Welcome! Here you can start a new investment!\n\n💵 We offer 1% daily for lifetime",
      text2:
        "⚠️ If you send less than 1 TRX, your deposit will be cancelled!\n\n<b>✅ Send the amount you want to invest to the following address:</b>",
      text3:
        "✅ <b>New Investment Started in Bot</b>\n\n📆<b> Total Investment Duration: </b>lifetime\n\n🗒 <code>Get paid on Every Day</code>\n\n⏱<b> Payment 1% every 24 hours</b>\n\n<b>💴 Invested Amount: </b> %amount% %currency%",
      text4:
        "➕<b> A New Deposit Created</b>\n\n👤 By Investor: %mention%\n💰 Amount: <b>%amount% %currency%</b>\n\n%hash%",
      text5:
        "✅ <b>New Re-Investment Started in Bot</b>\n\n📆<b> Total Re-Investment Duration: </b>lifetime\n\n🗒 <code>Get paid on Every Day</code>\n\n⏱<b> Payment 1% every 24 hours</b>\n\n<b>💴 Re-Invested Amount: </b> %amount% %currency%",
      text6:
        "➕<b> A New Re-Investment Created</b>\n\n👤 By Investor: %mention%\n💰 Amount: <b>%amount% %currency%</b>"
    },
    withdraw: {
      minimum: 1,
      maximum: 1,
      deposit: 1,
      depomin: 1,
      text:
        "💵 <b>Withdrawal Paid</b>\nThe owner <b>Automatically Paid your withdrawal of %amount% %currency%</b> on your wallet" +
        " \n<code>%wallet%</code>\n\n%txid%",
      text2:
        "➖ <b>✨ Withdraw Success</b>" +
        " \n\nUser: %username%\nAmount: <b>%amount% %currency%</b>\n\n%txid%"
    }
  }
  Bot.setProperty("admink", newT, "json")
  Bot.sendMessage("enter your email address to get bot.")
  Bot.run({ command: "/Ontransfer", options: { name: "new" } })
  return
}
if (message == "Old data") {
  Bot.sendMessage("enter your email address to get bot.")
  Bot.run({ command: "/Ontransfer", options: { name: "old" } })
  return
}

