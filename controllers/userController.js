import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const refreshCookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/api",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};

const createAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
        process.env.Secret_Access_Token,
        {
            expiresIn: 60 * 1000,
        }
    );
};

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields with * are required",
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Account already exists",
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            passwordHash,
        });

        return res.status(201).json({
            message: "Account created successfully",
            name: user.name,
        });
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields with * are required",
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (!existingUser) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            existingUser.passwordHash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const accessToken = createAccessToken(existingUser);

        const refreshToken = jwt.sign(
            {
                id: existingUser._id,
            },
            process.env.Secret_Refresh_Token,
            {
                expiresIn: "7d",
            }
        );

        res.cookie(
            "refreshToken",
            refreshToken,
            refreshCookieOptions
        );

        return res.status(200).json({
            id: existingUser._id,
            name: existingUser.name,
            role: existingUser.role,
            accessToken,
        });
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const refreshAccessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token required",
            });
        }

        const decodedToken = jwt.verify(
            refreshToken,
            process.env.Secret_Refresh_Token
        );

        const user = await User.findById(decodedToken.id);

        if (!user) {
            return res.status(401).json({
                message: "User no longer exists",
            });
        }

        const accessToken = createAccessToken(user);

        return res.status(200).json({
            id: user._id,
            name: user.name,
            role: user.role,
            accessToken,
        });
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired refresh token",
        });
    }
};

export const logoutUser = (req, res) => {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/api",
    });

    return res.status(200).json({
        message: "Logged out successfully",
    });
};