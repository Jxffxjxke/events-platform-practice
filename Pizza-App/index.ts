type Pizza = {
  id?: number;
  name: string;
  price: number;
};

type Order = {
  pizza: Pizza;
  orderID: number;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderID = 1;
let nextPizzaID = 5;

const orderQueue: Order[] = [];

const addNewPizza = (pizzaObj: Pizza): void => {
  for (let pizza of menu) {
    if (pizza.name === pizzaObj.name) {
      throw new Error("Pizza already exists");
    }
  }
  pizzaObj.id = nextPizzaID++;
  [...menu, pizzaObj];
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    pizza: selectedPizza,
    orderID: nextOrderID++,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderID: number): Order | undefined => {
  const selectedOrder = orderQueue.find(
    (orderObj: Order) => orderObj.orderID === orderID
  );
  if (!selectedOrder) {
    console.error(`Order ${orderID} cannot be found`);
    return;
  }
  selectedOrder.status = "completed";
  return selectedOrder;
};

const getPizzaDetail = (identifier: string | number): Pizza | undefined => {
  if (typeof identifier !== "string" || "number") {
    throw new TypeError(
      "Parameter `identifier` must be either a string or a number"
    );
  }
  const keyToSearch = typeof identifier === "string" ? "name" : "id";
  return menu.find((pizzaObj) => pizzaObj[keyToSearch] === identifier);
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ CHicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log({ menu });
console.log({ cashInRegister });
console.log({ orderQueue });
