// Requiring Express.
const express = require("express");
// Taking Router from express.
const router = express.Router();
// Importing the funcitons related to admin routes from admin Controller.
const {
  registerAdmin,
  loginAdmin,
  getMe,
  getAdmins,
  deleteUser,
} = require("../controllers/adminController");
// importing the function we created to protect routes.
const { protect } = require("../middleware/authMiddleware");

// applyting different functions according to different routes. Note we are only protecting private routes.
router.post("/", registerAdmin); // Public
router.post("/login", loginAdmin); // Public
router.get("/me", protect, getMe); // Private
router.get("/", protect, getAdmins); // Private
router.delete("/:id", protect, deleteUser); //Private

// Exporting the router to whic we have made changes to.
module.exports = router;
