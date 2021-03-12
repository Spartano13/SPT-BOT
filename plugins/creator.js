let handler = function (m) {
  this.sendContact(m.chat, '553181003881', 'ᬊ͜͡𝐒𝐏么𝐑𝐓么𝐍❂⋆➣⸼', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
