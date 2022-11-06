const Pizza = require("../model/pizza");
const PizzaBase = require("../model/pizzaBase");
const Cheese = require("../model/cheese");
const Meat = require("../model/meat");
const Sauces = require("../model/sauce");
const Veggies = require("../model/veggies");

const nodemailer = require("nodemailer");
require("dotenv").config();

exports.insertPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create({
      name: req.body.name,
      price: req.body.price,
      available_stock: req.body.available_stock,
      size: req.body.size,
      type: req.body.type,
    });

    if (pizza) {
      return res.status(201).json({
        _id: pizza._id,
        name: pizza.name,
        price: pizza.price,
        available_stock: pizza.available_stock,
        size: pizza.size,
        type: pizza.type,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.insertPizzaBase = async (req, res) => {
  try {
    const pizzaBase = await PizzaBase.create({
      size: req.body.size,
      price: req.body.price,
      available_stock: req.body.available_stock,
    });

    if (pizzaBase) {
      return res.status(201).json({
        _id: pizzaBase._id,
        size: pizzaBase.size,
        price: pizzaBase.price,
        available_stock: pizzaBase.available_stock,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.insertCheese = async (req, res) => {
  try {
    const cheese = await Cheese.create({
      name: req.body.name,
      price: req.body.price,
      available_stock: req.body.available_stock,
    });

    if (cheese) {
      return res.status(201).json({
        _id: cheese._id,
        name: cheese.name,
        price: cheese.price,
        available_stock: cheese.available_stock,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.insertMeat = async (req, res) => {
  try {
    const meat = await Meat.create({
      name: req.body.name,
      price: req.body.price,
      available_stock: req.body.available_stock,
    });

    if (meat) {
      return res.status(201).json({
        _id: meat._id,
        name: meat.name,
        price: meat.price,
        available_stock: meat.available_stock,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.insertSauce = async (req, res) => {
  try {
    const sauce = await Sauces.create({
      name: req.body.name,
      price: req.body.price,
      available_stock: req.body.available_stock,
    });

    if (sauce) {
      return res.status(201).json({
        _id: sauce._id,
        name: sauce.name,
        price: sauce.price,
        available_stock: sauce.available_stock,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.insertVeggies = async (req, res) => {
  try {
    const veggies = await Veggies.create({
      name: req.body.name,
      price: req.body.price,
      available_stock: req.body.available_stock,
    });

    if (veggies) {
      return res.status(201).json({
        _id: veggies._id,
        name: veggies.name,
        price: veggies.price,
        available_stock: veggies.available_stock,
      });
    } else {
      return res.status(400).json("Invalid data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

// GETTING PIZZA'S

exports.getRegularPizzas = async (req, res) => {
  try {
    const allPizzas = await Pizza.find({});

    if (allPizzas) {
      return res.status(201).json(allPizzas);
    } else {
      return res.status(400).json("Failed to get pizzas !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getAllPizzaBases = async (req, res) => {
  try {
    const allPizzaBase = await PizzaBase.find({});

    if (allPizzaBase) {
      return res.status(201).json(allPizzaBase);
    } else {
      return res.status(400).json("Failed to get pizza bases !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getAllSauces = async (req, res) => {
  try {
    const allSauses = await Sauces.find({});

    if (allSauses) {
      return res.status(201).json(allSauses);
    } else {
      return res.status(400).json("Failed to get sauces !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getAllCheese = async (req, res) => {
  try {
    const allCheese = await Cheese.find({});

    if (allCheese) {
      return res.status(201).json(allCheese);
    } else {
      return res.status(400).json("Failed to get cheese !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getAllMeat = async (req, res) => {
  try {
    const allMeat = await Meat.find({});

    if (allMeat) {
      return res.status(201).json(allMeat);
    } else {
      return res.status(400).json("Failed to get meat !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getAllVeggies = async (req, res) => {
  try {
    const allVeggies = await Veggies.find({});

    if (allVeggies) {
      return res.status(201).json(allVeggies);
    } else {
      return res.status(400).json("Failed to get veggies !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};
