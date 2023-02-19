const {mongoose} = require("./utils/packages");

const tributeModel = new mongoose.Schema({
  username: String,
  tributeTitle: String,
  tribute: String,
  status: Boolean,
})

const tribute = mongoose.model("tribute", tributeModel);

module.exports = {
  tribute
}