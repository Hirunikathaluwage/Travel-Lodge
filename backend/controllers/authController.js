import User from "../models/User.js";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async(req,res)=> {
    const {username,password} = req.body;

    const user = await User.findOne({username});
    if(!user) {
        return res.status(401).json({message:"Invalid credentials"});
    }

    const isMatch = await bycript.compare(password,User.password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid credentials"});
    }
    
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        message: "Login successful",
        token
    });
};
