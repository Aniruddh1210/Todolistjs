let todolist = [];
while (true) {
  let input = prompt("What would you like to do?");
  if (input === "new") {
    let value = prompt("What would you like to add?");
    todolist.push(value);
    console.log(`${value} was added to the array`);
  } else if (input === "list") {
    for (let data in todolist) {
      console.log(`${data} is ${todolist[data]} \n`);
    }
  } else if (input === "delete") {
    let number = prompt("Which index would you like to delete?");
    let index = parseInt(number);
    console.log(`${todolist[index]} will be deleted from the array`);
    todolist.splice(index, 1);
  } else if (input === "quit") {
    console.log(`this shit ends`);
    break;
  }
}
