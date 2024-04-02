import menu from "./src/utils/Menu.js";
import logo from "./src/utils/logo.js";

/* 
TODO pr04 - Inheritances - Create saving account and Create Current account na pasta Model
TODO pr05 - Class Abstracts - Change the class Conta to abstract class 
TODO pr06 - Interfaces - Create a interface with all methods that conta must have at a folder called repository folder
TODO pr07 - ContaController - Create Conta controller folder and implement the interface implement some methods (CRUD)
*/
async function main() {
  await logo();
  while (true) {
    await menu();
  }
}

main();
