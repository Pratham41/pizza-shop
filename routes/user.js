const router = require("express").Router();
const {
  loginUser,
  registerUser,
  updateUser,
  getUserList,
  getUserById,
  sendOtpToMail,
  verifyEmail,
} = require("../controller/user");
// MIDDLEWARES
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getUserList);
router.route("/:id").get(protect, getUserById);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/update").post(protect, updateUser);
router.route("/sendotp").post(sendOtpToMail);
router.route("/verify").post(verifyEmail);

module.exports = router;
