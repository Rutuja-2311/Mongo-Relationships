const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//const addCustomers = async () => {
  //  let cust1 = new Customer({
  //    name: "John Doe",
  //  });

  //    let order1 = await order.findOne({item: "Laptop"});
  //    let order2 = await order.findOne({item: "Phone"});

  //    cust1.orders.push(order1);
  //    cust1.orders.push(order2);

  //    let result = await cust1.save();
  //    console.log(result);

//  let result = await Customer.find({});
//  console.log(result);
//};

//addCustomers();

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

findCustomer(); 

//const addOrders = async () => {
//  let res = await order.insertMany([
//    { item: "Laptop", price: 1200 },
//    { item: "Phone", price: 800 },
//    { item: "Headphones", price: 150 },
//  ]);
//  console.log(res);
//};

//addOrders();
