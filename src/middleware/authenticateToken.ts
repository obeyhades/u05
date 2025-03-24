import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { log } from "node:console";
import { AnyARecord } from "node:dns";
import { register } from "node:module";
import test from "node:test";

interface decodedToken {
    user: {
        _id: string,
        username: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
    },

    iat:number

}


   export const  authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    
    const authHeader =req.headers.authorization
    const accessToken = authHeader?.split(" ")[1]
    console.log(accessToken);
    if (accessToken ==null)  {res.sendStatus(401)
        return}
    

    if (!accessToken) {
        res.status(401).json({ message: "Access token not found" });
        return;
    }

    try{
        const verifiedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET || "");

       req.user= (verifiedToken as decodedToken).user
       next()
    } catch (error) {
        res.status(403).json({ message: "Invalid token" }); 
        return; 
    }
}
 
export default authenticateToken;