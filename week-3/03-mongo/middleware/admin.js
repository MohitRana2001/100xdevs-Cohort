const Admin = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const {username , password } = req.headers;

        if(!username || !password){
            res.status(404).json({message: "username and password are required"});
        }

        const admin = await Admin.findOne(username);

        if(!admin || admin.password != password){
            res.status(404).json({message: "Invalid username or password"});
        }

        req.admin = admin;
        next();
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = adminMiddleware;