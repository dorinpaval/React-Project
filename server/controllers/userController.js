const User = require('../models/users');


exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userInfo = await User.findOne({ email: email });
        if(userInfo.password===password){
            res.status(200).json(userInfo);
        }
        else{ res.status(200).json("Wrong email or password!")}
    } catch {
        res.status(400).json("fetch user failed");
    }
}

exports.signup = async (req, res, next) => {
    const newuser = new User(req.body);
    try {
        await newuser.save()
        res.status(201).json(newuser);
    } catch (error) {
        res.status(201).json("Problem saving the user");
    }

}