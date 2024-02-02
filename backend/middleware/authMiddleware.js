import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

//1 Protect Routes
const protect = asyncHandler(async( req, res, next ) => {
    let token;

    //Read jwt from token
    token = req.cookies.jwt;

    if(token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decodedToken.userId).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

//2. Admin Middleware
const admin = (req, res, next) => {

    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as Admin');
    }
};

//export them to be used in Routes wherever the route needs to be protected
export { protect, admin };