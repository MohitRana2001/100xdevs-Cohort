const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //putting in mongodb
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });

    res.json({
        message : "todo created"
    })
});

app.get("/todos", async (req,res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
});

app.put("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id : req.body.id
    }, {
        completed : true
    })

    res.json({
        msg : "marked as completed"
    })
});

app.listen(3000, () => {
    console.log("running on port 3000");
});