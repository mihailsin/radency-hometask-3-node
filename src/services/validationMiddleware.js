const Joi = require("joi");

module.exports = {
  addNoteValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(15).required(),
      created: Joi.string().min(3).max(10).required(),
      category: Joi.string().min(3).max(15).required(),
      content: Joi.string().min(3).max(300).required(),
      archived: Joi.boolean().required(),
      active: Joi.boolean().required(),
      dates: Joi.string().min(0).max(20).required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },

  patchNoteValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(15).optional(),
      created: Joi.string().min(3).max(10).optional(),
      category: Joi.string().alphanum().min(3).max(15).optional(),
      content: Joi.string().min(3).max(30).optional(),
      archived: Joi.boolean().optional(),
      active: Joi.boolean().optional(),
      dates: Joi.string().min(0).max(20).optional(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },
};
