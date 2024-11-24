const { check, validationResult } = require('express-validator')
const User = require('../../models/user_model')

exports.ValidateRegisterForm = [
    check('name').trim().notEmpty().withMessage('must be a valide name'),
    check('email').isEmail({ allow_underscores: true  , host_blacklist: ['spam.com', 'fake.com'] }).withMessage('please fill the gaps').custom(async (email) => {
            const existingUser = await User.findOne({ email });
            console.log(existingUser);
            if (existingUser) {
              throw new Error('Email already in use');
            }
          }
    ),
    check('password').trim().notEmpty().isAlphanumeric().isLength({ min: 8, max: 30 }).withMessage('must be a valide password with min 8 caractere and max 30'),
    check('username').trim().notEmpty().withMessage('please fill the gaps').custom(async (username) => {
        const existingUser = await User.findOne({ username : username });
        if (existingUser) {
          throw new Error('username already in use');
        }
      }),
    check('birth_date').trim().notEmpty().isDate().withMessage('please fill the gaps with valid data'),
    check('phone_number').trim().notEmpty().isMobilePhone().withMessage("please fill the gaps with valid phone number"),
    check('gender').trim().notEmpty().isIn(["male","female"]).withMessage("gender should be male or female")
]
exports.ValidateUpdateForm = [
  check('name').trim().notEmpty().withMessage('must be a valide name'),
  check('email').isEmail({ allow_underscores: true  , host_blacklist: ['spam.com', 'fake.com'] }).withMessage('please fill the gaps'),
  check('username').trim().notEmpty().withMessage('please fill the gaps'),
  check('birth_date').trim().notEmpty().isDate().withMessage('please fill the gaps with valid data'),
  check('phone_number').trim().notEmpty().isMobilePhone().withMessage("please fill the gaps with valid phone number"),
  check('gender').trim().notEmpty().isIn(["male","female"]).withMessage("gender should be male or female")
]





exports.ValidateLoginForm = [
  check('email').trim().isEmail().withMessage('Email is not valid'),
  check('password').trim().notEmpty().withMessage('Password required')
]



exports.validationResult = (req, res, next) => {
    const resault = validationResult(req).array()
    if (!resault.length) {
        return next()
    }
    const erreur = resault[0].msg
    res.json({ succes: false, message: erreur })
    
}