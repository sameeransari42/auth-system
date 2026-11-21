import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExist = await userModel.findOne({
            $or : [
                {username}, 
                {email}
            ]
        }); 

        if (userExist) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        };


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                username: user.username,
                email: user.email,
            },
            token
        });


    } catch (error) {
        return res.json({
            success: false, 
            message: error.message
        });
    }
}