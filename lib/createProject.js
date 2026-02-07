const fs = require("fs-extra");
const path = require("path");

module.exports = async function createProject(projectName) {
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log("❌ Folder already exists");
    return;
  }

  await fs.mkdir(targetDir);
  console.log("📁 Project folder created:", projectName);
};
