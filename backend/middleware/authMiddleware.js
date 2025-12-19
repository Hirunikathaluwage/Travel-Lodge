import jwt from "jsonwebtoken";

export const protect = (req,res,next) => {
    const authHeader = req.header.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "No taken provided"});
    }

    try{
        const token = authHeader.split("No token provided");
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decoded;

        next();
    }catch(error){
        res.status(401).json({message:"Invalid token" });
    }
};