export const adminonly = (req,res,next) => {
    if(req.user.role !== "admin"){
        return res.req.status(403).json({message:"access denied"});
    }
    
    next();
}