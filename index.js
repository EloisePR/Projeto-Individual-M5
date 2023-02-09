import readlineSync from "readline-sync";
import chalk from "chalk";


const properties = [];
let input = "";

console.log(chalk.magentaBright("Programa de propriedades de CSS"))


while (input != "sair") {
  properties.push(input);
  input = readlineSync
    .question(chalk.magenta("Digite uma propriedade CSS: "))
    .toLocaleLowerCase();
}
console.log(chalk.greenBright.underline(properties.sort().join("\n")));
