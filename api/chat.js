// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { message, system } = req.body;

//   try {
//     const genAI = new GoogleGenerativeAI(process.env.API_KEY);

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.5-flash",
//       systemInstruction: system
//     });

//     const result = await model.generateContent(message);

//     res.status(200).json({
//       reply: result.response.text()
//     });

//   } catch (error) {
//     res.status(500).json({
//       reply: "Server sad aahe re biduuu 😭🔥"
//     });
//   }
// }
const { GoogleGenerativeAI } = require("@google-generative-ai/server");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { message, system } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: system
    });

    const result = await model.generateContent(message);

    res.status(200).json({
      reply: result.response.text()
    });

  } catch (err) {
    console.error("API ERROR:", err);
    res.status(500).json({ reply: "Server sad aahe re biduuu 😭🔥" });
  }
};

// /api/chat.js  (temporary test)
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { message } = req.body || {};
    // Return a deterministic test reply
    return res.status(200).json({
      ok: true,
      reply: `✅ Echo from server: "${message || 'no message'}" (temp test)`
    });
  } catch (err) {
    console.error("TEMP TEST ERROR:", err);
    return res.status(500).json({ ok: false, reply: "Server error (temp test)" });
  }
};


