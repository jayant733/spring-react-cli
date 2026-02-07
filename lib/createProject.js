const fs = require("fs-extra");
const path = require("path");

module.exports = async function createProject(projectName) {
  const targetDir = path.resolve(process.cwd(), projectName);
  const templateDir = path.resolve(__dirname, "..", "templates");

  console.log("📂 Target Dir:", targetDir);
  console.log("📂 Template Dir:", templateDir);

  if (!fs.existsSync(templateDir)) {
    console.log("❌ Templates folder not found");
    return;
  }

  if (fs.existsSync(targetDir)) {
    console.log(`❌ Project "${projectName}" already exists`);
    return;
  }

  console.log("🚀 Creating project:", projectName);

  await fs.ensureDir(targetDir);

  await fs.copy(
    path.join(templateDir, "backend"),
    path.join(targetDir, "backend")
  );

  await fs.copy(
    path.join(templateDir, "frontend"),
    path.join(targetDir, "frontend")
  );

  console.log("✅ Backend and Frontend copied successfully");
};
