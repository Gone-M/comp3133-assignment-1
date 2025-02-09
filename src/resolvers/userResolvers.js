const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userResolvers = {
  Query: {
    login: async (_, { username, email, password }) => {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (!user) throw new Error("User not found");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error("Invalid credentials");

      return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error("Email already in use");

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      return "User registered successfully";
    },
  },
};

module.exports = userResolvers;
