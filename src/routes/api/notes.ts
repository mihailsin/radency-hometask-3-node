/* eslint-disable @typescript-eslint/no-var-requires */
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
	getNotesStatsController,
} = require("../../controllers/notesController");

router.get("/", getNoteController);

router.post("/", addNoteValidation, addNoteController);

router.get("/stats", getNotesStatsController);

router.get("/:id", getNoteByIdController);

router.delete("/:id", deleteNoteController);

router.patch("/:id", patchNoteValidation, patchNoteController);

module.exports = router;
export {};
