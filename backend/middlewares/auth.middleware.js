const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {

    let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blacklistTokenModel.findOne({token:token})

    if(isBlackListed){
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        let user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }

};
module.exports.authCaptain = async (req, res, next) => {

    let token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blacklistTokenModel.findOne({token:token})

    if(isBlackListed){
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        let captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }

};
