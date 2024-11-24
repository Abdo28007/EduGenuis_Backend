const jwt = require('jsonwebtoken');
const User = require('../models/user_model')
require('dotenv').config()


exports.IsAuth = async (req, res, next) => {
  try {
    
    if (req.headers.token) {
      const decodedToken = jwt.verify(req.headers.token, process.env.SECRET_KEY);
      const user = await User.findById(decodedToken.userId);
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }else{
        req.user=user;
        next();
      }

    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
                if(error.name === 'JsonWebTokenError'){
                return res.json({success  : false ,message :'not autorizated'})
            }
            if(error.name === 'TokenExpiredError'){
                return res.json({success  : false ,message :'session failed sign in '})
            }
            return res.json({success  : false ,message :'Internel server error  '})
        }
    // return res.status(401).json({ message: 'invalid token' });
  }
  exports.isAdmin = async (req, res, next) => { 
    try {
        const user = req.user;
        if (user.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    }
    catch (error) { 
        return res.status(500).json({success  : false ,message :error.message[0]})
    }
}

