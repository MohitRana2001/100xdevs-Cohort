const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username , password} = req.body;

    if(!username || !password) {
        res.status(404).json({message : "Username or Password are required"});
    }

    const existingAdmin = await Admin.findOne(username);

    if(existingAdmin){
        res.status(404).json({message: "Username already exists"});
    }

    const newAdmin = new ({
        username, password
    });

    await newAdmin.save();

    res.status(201).json({message: "Admin successfully created"});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title , description} = req.body;

    if(!title) {
        res.status(404).json({message: "title is required"});
    }

    const existingTitle = await Course.findOne(title);

    if(existingTitle){
        res.status(404).json({message: "course already exists"});
    }

    const newCourse = ({
        title, description
    })

    await newCourse.save();

    res.status(201).json({message: "new course has been added"});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

module.exports = router;