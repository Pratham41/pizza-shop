const router = require("express").Router();
const {
  insertPizza,
  insertCheese,
  insertMeat,
  insertPizzaBase,
  insertSauce,
  insertVeggies,
  getRegularPizzas,
  getAllPizzaBases,
  getAllSauces,
  getAllCheese,
  getAllMeat,
  getAllVeggies,
} = require("../controller/pizza");
// MIDDLEWARES
const { protect } = require("../middleware/auth");

// router.route("/").get(protect, getUserList);
// router.route("/:id").get(protect, getUserById);
// router.route("/login").post(loginUser);
router.route("/insert").post(protect, insertPizza);
router.route("/insertPizzaBase").post(protect, insertPizzaBase);
router.route("/insertCheese").post(protect, insertCheese);
router.route("/insertMeat").post(protect, insertMeat);
router.route("/insertSauce").post(protect, insertSauce);
router.route("/insertVeggies").post(protect, insertVeggies);
// GETTING PIZZA
router.route("/getAllRegularPizza").get(protect, getRegularPizzas);
router.route("/getAllPizzaBases").get(protect, getAllPizzaBases);
router.route("/getAllSauces").get(protect, getAllSauces);
router.route("/getAllCheese").get(protect, getAllCheese);
router.route("/getAllMeat").get(protect, getAllMeat);
router.route("/getAllVeggies").get(protect, getAllVeggies);

module.exports = router;
