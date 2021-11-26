import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST/API/USERS/LOGIN
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
   console.log(user)
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      isAdmin: user.isAdmin,
      isClerk: user.isClerk,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid userName or password");
  }
});

// @desc Register a new user
// @route POST/API/USERS
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, userName, phoneNumber, gender, dateOfBirth, email, password } =
    req.body;
  const userExists = await User.findOne({ email, userName, phoneNumber});

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    userName,
    phoneNumber,
    gender,
    dateOfBirth,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc Get user profile
// @route GET/api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      userName: user.userName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      email: user.email,
      isAdmin: user.isAdmin,
      isClerk: user.isClerk,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc  Update user profile
// @route PUT/api/users/profile
// @ access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.userName = req.body.userName || user.userName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.gender = req.body.gender || user.gender;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      userName: updateUser.userName,
      email: updateUser.email,
      phoneNumber: updateUser.phoneNumber,
      gender: updateUser.gender,
      dateOfBirth: updateUser.dateOfBirth,
      isAdmin: updateUser.isAdmin,
      isClerk: updateUser.isClerk,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const resetPass = asyncHandler(async(req, res) => {
    const user = await User.findOne({userName: req.body.userName, email: req.body.email})
    if (user) {
        user.password = req.body.password
        await user.save()
        res.status(200).json(req.body.password)
    }
    else {
        res.status(401)
        throw new Error("Username or email invalid!")
    }
})

export {authUser,registerUser, getUserProfile, updateUserProfile, resetPass}
