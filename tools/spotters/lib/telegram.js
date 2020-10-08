import fetch from "isomorphic-fetch";

const user = process.env.TELEGRAM_USER;
const token = process.env.TELEGRAM_TOKEN;

const toTelegram = asset => {
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: user,
      text: `🕵️ ${asset}`
    })
  });
};

export default toTelegram;
