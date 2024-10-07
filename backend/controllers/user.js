var mongoose = require("mongoose");
var { userSchema, roleSchema } = require("../models/user");

mongoose.connect("mongodb://admin:password@localhost:27017/ecommerce");

const User = mongoose.model("User", userSchema);
const Role = mongoose.model("Role", roleSchema);

// User Registration
var { hashPass } = require("../auth");

async function userRegister(req, res, next) {
  // Check if the user exist
  if ((await User.findOne({ email: req.body.email })) !== null) {
    res.send("There is an existing account associated with this email.");
  } else {
    // Hash password
    const hashedPass = await hashPass(req.body.password);

    // Assign "user" role to the new user
    const userRole = await Role.findOne({ name: "user" });

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      role: userRole._id,

      name: "",
      avatar: "",
      phone: "",
      address: {
        country: "",
        province: "",
        city: "",
        postCode: "",
        street: "",
      },
    });

    newUser.save();

    // Add the user to the "user" role
    const updatedRole = await Role.findOneAndUpdate(
      { name: "user" },
      { $push: { users: newUser._id } },
      { new: true }
    );

    res.json(newUser);
  }
}

// User Login
var { authUser } = require("../auth");
const jwt = require("jsonwebtoken");

async function userLogin(req, res, next) {
  const user = await User.findOne({ email: req.body.email }).populate("role");
  const match = await authUser(req.body.password, user.password);
  if (match == true) {
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role.name,
      },
      process.env.JWT_KEY
    );
    res.json(token);
  } else {
    res.send("Username or password not correct.");
  }
}

// Change user password
async function changePass(req, res, next) {
  // Verify old password
  const user = await User.findOne({ email: req.body.email });
  const match = await authUser(req.body.oldPassword, user.password);
  if (match == true) {
    const hashedNewPass = await hashPass(req.body.newPassword);
    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.email },
      { password: hashedNewPass },
      { new: true }
    );
    res.json(updatedUser);
  } else {
    res.send("Wrong password!");
  }
}

// Show user profile
async function showUser(req, res, next) {
  res.json(
    await User.findById(req.query.userID).select(
      "-password -role"
    )
  );
}

// Update user profile
async function updateUser(req, res, next) {
  try {
    // If there is a new avatar
    if (req.file) {
      const path = /(\/uploads)(.+)/g.exec(req.file.path)[0];
      // console.log(path);
      await User.findByIdAndUpdate(
        req.query.userID,
        { avatar: path },
        { new: true }
      );
    }

    await User.findByIdAndUpdate(
      req.query.userID,
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        address: {
          country: req.body.country,
          province: req.body.province,
          city: req.body.city,
          postCode: req.body.postCode,
          street: req.body.street,
        },
      },
      { new: true }
    );

    res.send("User Updated!");
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  userRegister,
  userLogin,
  changePass,
  showUser,
  updateUser,
};
