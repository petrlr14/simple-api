const user = require("./../models/users");

exports.getAll = async (req, res, next) => {
  const users = await user.find({}).exec();
  return res.status(200).json({
    users,
    msg: "Todo bien crack!",
  });
};
