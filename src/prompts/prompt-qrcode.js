import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1 - NORMAL OU 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2")
    }
];

export default promptQRCode;