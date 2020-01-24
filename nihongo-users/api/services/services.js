var assert = require("assert");
const Joi = require("joi");

//https://scotch.io/tutorials/node-api-schema-validation-with-joi
module.exports = {
  validateUser: async newUser => {
    const schema = Joi.object().keys({
      firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    });

    const isValid = Joi.validate(newUser, schema, (err, value) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
    console.log("isValid looks like... -=-=-=-=-=-=-=-=");
    console.log(isValid);
    return isValid;
  }
};
