import BaseCommand from '../../../structures/commands/BaseCommand.js'

export default class Help extends BaseCommand {
  /**
   * @param {string} category
   * @param {Main} main
   */
  constructor(category, main) {
    super(main)

    this.register(Help, {
      category: category,

      name: 'help',
      aliases: ['h'],
      description:
        'Gives a link to a website where you can find all the information you need.',
      usage: 'help',
      params: [],
      example: 'help'
    })
  }

  /**
   * @param {string} command string representing what triggered the command
   */
  run(command) {
    const embed = new this.Discord.MessageEmbed()
      .setTitle('Need help?')
      .setDescription(
        `${this._m.user.username} site with a list of commands: https://soft-wet.damon.sh/#/commands\nVisit me in my [Discord server](https://discord.gg/SWEsj6q)\nOther information can be found with the \`info\` command`
      )
      .setColor(this.randomEmbedColor)
      .setFooter('Powered by the 🔥 of the gods')

    this.send(embed)
  }
}
