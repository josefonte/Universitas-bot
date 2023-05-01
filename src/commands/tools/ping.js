const { SlashCommandBuilder } = require("discord.js");

let responses = [
    "Que queres chato?",
    "Oh flor deixas pôr 😏",
    "USCITA 🤌",
    "É um fino e uns tremocinhos se faz favor 🍺",
    "BENFIIIIIIIIIIIICA 🏆",
    "Tava a dormir pah 😤",
    "A Joana cheira mal 💩",
    "Raposeira não trapaceia 🦊",
    "Oh estrela queres cometa ☄️🤪",
];

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Responde "),

    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        let index = Math.floor(Math.random() * responses.length);
        const newMessage = `${responses[index]}`;

        await interaction.editReply({ content: newMessage });
    },
};
