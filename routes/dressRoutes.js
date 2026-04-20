const express = require("express");
const router = express.Router();
const dressController = require("../controllers/dressController");

router.post("/", dressController.createDress);
router.get("/", dressController.getAllDress);
router.put("/:id", dressController.updateDress);
router.delete("/:id", dressController.deleteDress);

module.exports = router;