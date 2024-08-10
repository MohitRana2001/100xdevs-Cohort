const User = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const {username , password } = req.headers;

    if(!username || !password) {
        res.status(404).json({message: "Username or Password are required"});
    }

    const user = await User.findOne(username);

    if(!user || user.password != password){
        res.status(404).json({message : "Invalid username or password"});
    }

    req.user = user;
    next();
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = userMiddleware;