const Joi = require('joi');

const NotePayloadSchema = Joi.object({
  title: Joi.string().required(),
  cue: Joi.array().items(Joi.string()).required(),
  main: Joi.string().required(),
  summary: Joi.string().required(),
  categoryId: Joi.string().required(),
});

module.exports = { NotePayloadSchema };
