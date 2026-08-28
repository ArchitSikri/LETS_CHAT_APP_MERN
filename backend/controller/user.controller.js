const { User } = require("../models/USER.MODEL.JS");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const profilePhoto = `https://i.pravatar.cc/150?u=${encodeURIComponent(username)}`;

        await User.create({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePhoto
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            });
        }

        const tokenData = { userId: user._id };
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        return res.status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict'
            })
            .json({
                id: user.id,
                username: user.username,
                fullName: user.fullName,
                profilePhoto: user.profilePhoto
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const logout = (req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", { maxAge: 0 })
            .json({ message: "logged out successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { registerUser, login, logout, getOtherUsers };