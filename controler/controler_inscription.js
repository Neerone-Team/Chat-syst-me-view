
const Joi = require('joi');

class Controler_inscription {

    validate_data(user_data) {

        return new Promise(async (resolve, reject) => {
            try {
                // implémentation du schéma de validation des données
                const schema = Joi.object({
                    username: Joi.string()
                    .min(3)
                        .max(30)
                        .required(),

                    pseudo: Joi.string()
                        .alphanum()
                        .min(3)
                        .max(10)
                        .required(),

                    password_1: Joi.string()
                        .pattern(new RegExp('^[a-zA-Z0-9@]{3,30}$')).required(),

                    password_2: Joi.ref('password_1'),


                    email: Joi.string()
                        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
                });

                let data_user = schema.validate(user_data);

                resolve(data_user);
            } catch (e) {

                reject(new Error(e));
            }
        });
    }

}

module.exports = Controler_inscription;