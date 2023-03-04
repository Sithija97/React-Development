import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcryptjs";
import { handleError } from "../utils/errors.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bycrypt.genSaltSync(10);
    const hash = bycrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT);
    const { password, ...data } = newUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(data);
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(handleError(404, "User not found"));
    const isCorrect = await bycrypt.compare(req.body, password, user, password);
    if (!isCorrect) return next(handleError(400, "Wrong password"));
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...data } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(data);
  } catch (error) {
    next(error);
  }
};
