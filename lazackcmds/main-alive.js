let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/Lazack28/Lazack-md@main/media/Alive.mp3'
  let url = 'https://wa.me/qr/P6WADRJOKAFUK1'
  let murl = 'https://wa.me/qr/P6WADRJOKAFUK1'
  let img = 'https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'LAZACK MD ALIVE',
        body: 'Lazack md',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/IIpL6gf6dcq4ial8gaJLE9',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
