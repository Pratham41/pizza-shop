const Users = require("../model/user");
const Security = require("../model/otp");
const ResetPassword = require("../model/resetPassword");
const generateToken = require("../utils/generateToken");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      return res.status(401).json("Invalid email or password !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.registerUser = async (req, res) => {
  try {
    const userExists = await Users.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json("User already exists !");
    }

    const user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
      isEmailVerified: req.body.isEmailVerified,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isEmailVerified: user.isEmailVerified,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json("Invalid user data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { email, password, name, isAdmin } = req.body;
    const user = await Users.findOne({ email: req.body.email });

    if (user) {
      user.email = email;
      user.password = password;
      user.name = name;
      user.isAdmin = isAdmin;
      const updatedUser = await user.save();
      if (updatedUser) {
        return res.status(200).json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
        });
      }
    } else {
      return res.status(400).json("Invalid user data !");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error !");
  }
};

exports.getUserList = async (req, res) => {
  try {
    const users = await Users.find({}, { password: 0 });

    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(400).json({
        status: "failed",
        message: "users not found",
        error: err,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (user) {
      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "users not found",
        error: err,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error,
    });
  }
};

exports.sendOtpToMail = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    // SENDING MAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.FROM_MAIL,
        pass: process.env.MAIL_PASS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: process.env.FROM_MAIL,
      to: email,
      subject: "Email Verification OTP",
      html: `<h2>Hi,</h2> 
          <h4> Your OTP for email verification is  ${otp} </h4>`,
    };

    transporter.sendMail(mailOptions, async (err, response) => {
      if (err) {
        console.log("Error while sending email...");
        console.log(err);
      } else {
        console.log("OTP send to mail successfully !");

        // Saving OTP to DB
        console.log("Saving OTP to DB...");
        const otpData = await Security.create({
          email,
          passOTP: otp,
        });
        console.log("otpData", otpData);
        if (otpData) {
          console.log("OTP saved to DB successfully !");
          return res.status(201).json({
            status: "Success",
            message: "otp send to mail and saved to DB",
            otpData,
          });
        } else {
          return res.status(500).json({
            status: "failed",
            message: "failed to send otp!",
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error,
    });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const otpData = await Security.find({ email, passOTP: otp });
    console.log("iuhui", otpData);
    if (otpData?.length > 0) {
      const user = await Security.findOne({ email });
      if (user) {
        user.isEmailVerified = true;
        const updatedUser = await user.save();
        console.log("inside if");

        if (updatedUser) {
          return res.status(200).json({
            status: "success",
            message: "otp verification successful !",
          });
        }
      }
    } else {
      return res.status(400).json({
        status: "failed",
        message: "invalid otp !",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error,
    });
  }
};

exports.sendOtpToMailForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    // SENDING MAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.FROM_MAIL,
        pass: process.env.MAIL_PASS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: process.env.FROM_MAIL,
      to: email,
      subject: "Email Verification OTP",
      html: `<h2>Hi,</h2> 
          <h4> Your OTP for email verification is  ${otp} </h4>`,
    };

    transporter.sendMail(mailOptions, async (err, response) => {
      if (err) {
        console.log("Error while sending email...");
        console.log(err);
      } else {
        console.log("OTP send to mail successfully !");

        // Saving OTP to DB
        console.log("Saving OTP to DB...");
        const otpData = await Security.create({
          email,
          passOTP: otp,
        });
        console.log("otpData", otpData);
        if (otpData) {
          console.log("OTP saved to DB successfully !");
          return res.status(201).json({
            status: "Success",
            message: "otp send to mail and saved to DB",
            otpData,
          });
        } else {
          return res.status(500).json({
            status: "failed",
            message: "failed to send otp!",
          });
        }
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error,
    });
  }
};
