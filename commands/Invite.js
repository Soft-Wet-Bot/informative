import BaseCommand from '../../../structures/commands/BaseCommand.js'

export default class Invite extends BaseCommand {
  /**
   * @param {string} category
   * @param {Main} main
   */
  constructor(category, main) {
    super(main)

    this.register(Invite, {
      category: category,

      name: 'invite',
      aliases: ['inv'],
      description: 'Invite Damon to your Discord server.',
      usage: 'invite',
      params: [],
      example: 'invite'
    })
  }

  /**
   * @param {string} command string representing what triggered the command
   */
  run(command) {
    const embed = new this.Discord.MessageEmbed()
      .setAuthor(`Made by ${this.creators}`)
      .setDescription(
        `Click [here](https://discordapp.com/oauth2/authorize?&client_id=${this._m.user.id}&scope=bot&permissions=${this._m.config.permission_bit}&redirect_uri=https%3A%2F%2Fsoft-wet.damon.sh%2F%23%2Fcommands) to invite`
      )
      .setColor(this.randomEmbedColor)
      .setFooter('Powered by the 🔥 of the gods')

    this.send(embed)
  }
}
