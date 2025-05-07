const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
});

function validateTask(data) {
  return taskSchema.validate(data);
}

module.exports = { validateTask };