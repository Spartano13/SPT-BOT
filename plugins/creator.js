let handler = function (m) {
  this.sendContact(m.chat, '553181003881', 'α¬Ν‘ΝππδΉππδΉπβββ£βΈΌ', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
