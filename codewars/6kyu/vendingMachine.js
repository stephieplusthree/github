//Introduction
//	A vending machine is a machine that dispenses items such as snacks and beverages to customers automatically, after the customer inserts currency or credit into the machine. The first modern vending machines were developed in England in the early 19th century and dispensed postcards. (Source Wikipedia)
 
//Vending Machine
//Task
// 	In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called VendingMachine with at least one method called vend. On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed. The vend method should take two arguments 1. Selection code of the item (not case sensitive) and 2. Amount of money the user inserts into the machine.
 
//An example call of the vend method

//machine.vend("A01", 0.90)
//where the selected item is A01 and the money given to the machine is 90p

//An example of the items Array is below

//var items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
//             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
//             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
//             {name:"Freddo", code:"A04", quantity:1, price:0.25}];
//Rules
//	1. If the money given to the machine is less than the item cost return "Not enough money!"

//2. If the quantity is 0 for an item return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.

//3. If an item is correctly selected return "Vending Item Name with 9.40 change.". Where "Item Name" is the name of the item and change if any given.

//4. If an item is correctly selected and there is no change needed then return "Vending Item Name". Where "Item Name" is the name of the item.

//5. If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.

//6. If a selection is successful then the quantity should be updated.

//7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

//8. Change is always given to 2 decimal places ie 7.00




// answer

function VendingMachine(items, money) {
    // input: string, number
    // output: string
    
    // [x] initialize variables
    // [x] find the item based on the code 
    // [x] return "Invalid selection" if item not found
    // [x] find quantity of item, 
    // [x] if zero items return "Out of stock"
    // [x] find the item price
    // [x] check to see if you have enough money to buy item 
    // [] return item and change
    // [] update quantity and money on vending machine
    
    this.items = items;
    this.money = money;
    
  };
  
  VendingMachine.prototype.vend = function (selection, itemMoney){
    //console.log(this.items)
    
    var item = this.items.filter(function(item){
      return item.code == selection;                        
    });
    //console.log(item)
    
      if(item.length === 0) return `Invalid selection! : Money in vending machine = ${this.money.toFixed(2)}`;
    
    var quantity = item[0].quantity;
    //console.log(quantity)
    
      if(quantity === 0) return `${item[0].name}: Out of stock!`;
    
    var price = item[0].price;
    console.log(price)
    
      if(price == itemMoney) {
        this.money = this.money + itemMoney;
        return `Vending ${item[0].name}`;
      } else if(price > itemMoney){
        return "Not enough money!";
      } else {
        var change = itemMoney - price;
        this.money = this.money + price;
        return `Vending ${item[0].name} with ${change.toFixed(2)} change.`;
      }
  };
  
  