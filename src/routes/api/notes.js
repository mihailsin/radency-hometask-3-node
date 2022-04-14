const express = require("express");
const router = express.Router();

const {
  addNoteValidation,
  patchNoteValidation,
} = require("../../services/validationMiddleware");

const {
  addNoteController,
  getNoteController,
  getNoteByIdController,
  deleteNoteController,
  patchNoteController,
} = require("../../controllers/notesController");

router.get("/", getNoteController);

router.get("/:id", getNoteByIdController);

router.post("/", addNoteValidation, addNoteController);

router.delete("/:id", deleteNoteController);

router.patch("/:id", patchNoteValidation, patchNoteController);

module.exports = router;
