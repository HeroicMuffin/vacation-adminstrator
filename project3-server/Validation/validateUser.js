const Joi = require("@hapi/joi");

const registerationSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(14)
    .required(),

  lastName: Joi.string()
    .min(3)
    .max(14)
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,20}$")),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }
  })
});

function registerValidation(req, res, next) {
  const { error } = registerationSchema.validate(req.body);
  if (error) return res.json({ message: "Incorrect Input", redirect: false });
  next();
}

module.exports = { registerValidation };
