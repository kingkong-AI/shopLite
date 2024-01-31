import express from "express";
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUser,
    getUsers,
    getUsersByID,
    updateUserProfile,
    deleteUser
} from "../controllers/userController.js";

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUsersByID).put(updateUser).delete(deleteUser);

export default router;