const Router = require("express");
const { connectDB } = require("../utils/database");
const router = Router();

router.post('/login', (req,res) =>{

    const username = req.body.username
    const password = req.body.password
    
    connectDB.getConnection (async (err, connection) => {

    })
} 
)
