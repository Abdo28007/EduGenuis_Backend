const User = require('../models/user_model')
const bcrypt = require("bcrypt")

const jwt = require('jsonwebtoken')
require('dotenv').config()
const Techs = require('../models/TechnologiesModel')



exports.DeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.user_id)
        if (!user) {
            return res.status(500).json({ error: 'user not found' })
        }
        return res.status(200).json({ message: 'user has been deleted succesfully' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
exports.GetUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        if (!users) {
            return res.status(500).json({ error: 'no users found' })
        }
        return res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ error })
    }
}
exports.Addtech = async (req, res) => {
    try {
        const { tech_name } = req.body;
        const tech = new Techs({ tech_name })
        await tech.save()
        return res.status(200).json({ message: 'tech has been added succesfully' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
exports.Deletetech = async (req, res) => {
    try {
        const tech = await Techs.findByIdAndDelete(req.params.tech_id)
        if (!tech) {
            return res.status(500).json({ error: 'tech not found' })
        }
        return res.status(200).json({ message: 'tech has been deleted succesfully' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
exports.Updatetech = async (req, res) => {
    try {
        const tech = await Techs.findByIdAndUpdate(req.params.tech_id, req.body)
        if (!tech) {
            return res.status(500).json({ error: 'tech not found' })
        }
        return res.status(200).json({ message: 'tech has been updated succesfully' })
    } catch (error) {
        res.status(500).json({ error })
    }
}