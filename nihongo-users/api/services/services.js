var assert = require("assert");
const Joi = require("joi");

//https://scotch.io/tutorials/node-api-schema-validation-with-joi
module.exports = {
  validateUser: async newUser => {
    let response;

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

    console.log("about to validate");
    Joi.validate(newUser, schema, (err, value) => {
      if (err) {
        console.log("inside validate, error track");
        console.log(err);
        response = err;
      } else {
        console.log("inside validation, validations success");
        console.log(value);
        response = true;
      }
    });
    return response;
  }
};
