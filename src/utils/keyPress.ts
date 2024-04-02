import inquirer from "inquirer";

export default async function keyPress() {
  await inquirer.prompt({
    type: "input",
    name: "question",
    prefix: "\n⚠️ ",
    message: "Press enter to continue...\n\n",
  });
}
