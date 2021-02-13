import BaseCommand from '../../../structures/commands/BaseCommand.js'
import humanReadableTime from 'humanize-duration'

export default class Info extends BaseCommand {
  /**
   * @param {string} category
   * @param {Array<*>} args
   */
  constructor(category, ...args) {
    super(...args)

    this.register(Info, {
      category: category,

      name: 'info',
      aliases: ['information'],
      description: 'Responds with the bots info.',
      usage: 'info',
      params: [],
      examples: []
    })
  }

  /**
   * @param {string} command string representing what triggered the command
   */
  async run(command) {
    const embed = new this.Discord.MessageEmbed()
      .setAuthor(this._m.user.tag, this._m.user.avatarURL())
      .setTitle('You called for help, here I am!!!')
      .addField(
        '__Name & Avatar__',
        '[Soft & Wet](http://jojo.wikia.com/wiki/Soft_%26_Wet)',
        true
      )
      .addField('__Using__', `discord.js ${this.Discord.version}`, true)
      .addField(
        '__Prefix__',
        `${this._m.config.default_prefix[
        this._m.config.development ? 'dev' : 'prod'
        ]
        }`,
        true
      )
      .addField(
        '__Invite Link__',
        `[HERE](https://discordapp.com/oauth2/authorize?client_id=${this._m.user.id}&permissions=${this._m.config.permission_bit}&redirect_uri=https%3A%2F%2Fsoft-wet.damon.sh%2F%23%2Fcommands&scope=bot)`,
        true
      )
      .addField('__Website__', '[HERE](https://soft-wet.damon.sh/)', true)
      .addField(
        '__Support Server__',
        '[HERE](https://discord.gg/SWEsj6q)',
        true
      )
      .addField(
        '__Uptime__',
        `${humanReadableTime(
          Math.round((Date.now() - this._m.bootUp) / 1000) * 1000
        )}`,
        true
      )
      .addField(
        '__Found an error?__',
        `Join the [Support Server](https://discord.gg/SWEsj6q) or add us:\n${this.creators}`
      )
      .setColor(this.randomEmbedColor)
      .setImage('https://contrib.rocks/image?repo=Soft-Wet-Bot/base')
    this.send(embed)
  }
}
