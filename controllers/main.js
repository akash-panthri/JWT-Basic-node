const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }

const id = new Date().getDate()


    const token = jwt.sign({id, password},process.env.JWT_SECRET,{expiresIn:'60d'})

    res.status(200).json({msg:'success', token})
}

const dashboard = async (req, res)=>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, Tony Stark `, secret:`Your lucky number is ${luckyNumber}`})
}

module.exports = { login, dashboard}