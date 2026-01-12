import type { AnySelectMenuInteraction, ButtonInteraction, ModalSubmitInteraction } from "discord.js";
import type Lavamusic from "./Lavamusic";

interface ComponentOptions {
    name: string;
    aliases?: string[];
}

export default class Component {
    public client: Lavamusic;
    public name: string;
    public aliases: string[];

    constructor(client: Lavamusic, options: ComponentOptions) {
        this.client = client;
        this.name = options.name;
        this.aliases = options.aliases ?? [];
    }

    public async run(
        _interaction: ButtonInteraction | AnySelectMenuInteraction | ModalSubmitInteraction,
    ): Promise<any> {
        return await Promise.resolve();
    }
}

/**
 * Project: lavamusic
 * Author: Appu
 * Main Contributor: LucasB25
 * Company: Coders
 * Copyright (c) 2024. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/YQsGbTwPBx
 */
