import BaseModule from "./structures/BaseModule.js";

export default class Informative extends BaseModule {
  /**
   * @param {Main} main
   */
  constructor(main) {
    super(main);

    this.register(Informative, {
      name: "informative",
    });
  }

  init() {
    this.modules.commandRegistrar.registerCommands('informative', import.meta.url);

    return true;
  }
}
