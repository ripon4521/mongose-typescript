import Joi from "joi";

const productJoiSchema = Joi.object({
    name: Joi.string().required(),
    productId : Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(
        Joi.object({
            type: Joi.string().required(),
            value: Joi.string().required()
        })
    ).required(),
    inventory: Joi.object({
        quantity: Joi.number().required(),
        inStock: Joi.boolean().required()
    }).required(),

});



export default productJoiSchema;
