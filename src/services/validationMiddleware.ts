import { NextFunction, Request, Response } from "express";

/* eslint-disable @typescript-eslint/no-var-requires */
const Joi = require("joi");

module.exports = {
	addNoteValidation: (req: Request, res: Response, next: NextFunction) => {
		const schema = Joi.object({
			name: Joi.string().trim().min(3).max(15).required(),
			created: Joi.string().trim().min(3).max(10).required(),
			category: Joi.string().trim().min(3).max(15).required(),
			content: Joi.string().trim().min(3).max(300).required(),
			archived: Joi.boolean().required(),
			active: Joi.boolean().required(),
			dates: Joi.string().trim().min(0).max(30).required(),
		});

		const validationResult = schema.validate(req.body);
		if (validationResult.error) {
			return res.status(400).json({ status: validationResult.error.details });
		}
		next();
	},

	patchNoteValidation: (req: Request, res: Response, next: NextFunction) => {
		const schema = Joi.object({
			name: Joi.string().trim().min(3).max(15).optional(),
			created: Joi.string().trim().min(3).max(10).optional(),
			category: Joi.string().trim().min(3).max(15).optional(),
			content: Joi.string().trim().min(5).max(300).optional(),
			archived: Joi.boolean().optional(),
			active: Joi.boolean().optional(),
			dates: Joi.string().trim().min(0).max(30).optional(),
		});

		const validationResult = schema.validate(req.body);
		if (validationResult.error) {
			return res.status(400).json({ status: validationResult.error.details });
		}
		next();
	},
};
