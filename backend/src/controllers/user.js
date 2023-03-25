const UserModel = require("../models/user");

var jsonwebtoken = require("jsonwebtoken");
var bcryptjs = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await UserModel.findOne({ email });

    if (!isUserExist) throw new Error("User not found.");

    var passwordIsValid = bcryptjs.compareSync(password, isUserExist.password);

    if (!passwordIsValid) throw new Error("Incorrect password.");

    var token = jsonwebtoken.sign({ id: isUserExist.id }, "KEY_SECRET", {
      expiresIn: 86400,
    });

    return res.status(200).json({
      token,
      userId: isUserExist.id,
      email: isUserExist.email,
      status: true,
    });
  } catch (error) {
    return res.status(200).json({ status: false, message: error.message });
  }
};
