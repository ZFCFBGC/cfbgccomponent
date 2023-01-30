const allBuildConfig = require("./config/config.all");
const npmBuildConfig = require("./config/config.npm");
console.log("---", process.env.VUE_GQG_ENV);
module.exports = process.env.VUE_GQG_ENV === "npm" ? npmBuildConfig : allBuildConfig;
