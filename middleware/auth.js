const { UnauthenticatedError } = require('../errors/index')
const jwt = require("jsonwebtoken");

const authenicatinMiddelware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided');
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
    const {id,username} = decoded
    req.user = {id,username}
    
     
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }

    next();
  };
  
  
  module.exports = authenicatinMiddelware