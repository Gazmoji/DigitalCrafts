let shoppingLists = [];

while (true) {
  let input = prompt(
    "Enter 1 to add a shopping list to your list. Enter 2 to delete a shopping list. Enter view to see your list. Press q to quit."
  );
  if (input == "q") {
    break;
  } else if (input == "1") {
    let title = prompt("Name the title of your shopping list.");
    let items = prompt("Enter items for your shopping list.");
    let shoppinglist = {
      newtitle: title,
      newItems: items,
      id: shoppingLists.length + 1,
    };
    shoppingLists.push(shoppinglist);
    console.log(shoppingLists);
  } else if (input == "2") {
    let deleteItem = prompt("Enter what you would like to delete.");
    for (let i = 0; i < shoppingLists; i++) {
      if (deleteItem == shoppingLists[i].id) {
        shoppingLists.splice(i, 1);
      }
    }
  } else if (input == "view") {
    for (let i = 0; i < shoppingLists.length; i++) {
      console.log(shoppingLists[i]);
    }
  }
}

class ShoppingList {
  constructor(title, address) {
    this.title = title;
    this.address = address;
    this.shoppingLists = [];
  }
}

let shoppingList = new ShoppingList(shoppingLists);
let shoppingListsDisplay = shoppingList.shoppingLists.concat(shoppingLists);
console.log(shoppingListsDisplay);
console.log(shoppingList);
