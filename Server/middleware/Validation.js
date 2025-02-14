import Joi from "joi";

const RegistrationVal = (req, res, next) => {
    console.log(req.body);
  const schema = Joi.object({
     name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.number().min(10).max(10).required(),
    password: Joi.string().required(),
  });
    const { error } = schema.validate(req.body);
  if (error) {
  return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
const ConnectToVal = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.email().required(),
    password: Joi.min(3).max(10).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
export { RegistrationVal, ConnectToVal };
