const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");

try {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (
      file.startsWith("sitemap-") &&
      file.endsWith(".xml") &&
      file !== "sitemap.xml"
    ) {
      try {
        fs.unlinkSync(path.join(publicDir, file));
        console.log(`Removed stale sitemap: ${file}`);
      } catch (error) {
        console.warn(`Failed to remove stale sitemap ${file}: ${error.message}`);
      }
    }
  }
} catch (error) {
  console.warn(`Unable to inspect public directory: ${error.message}`);
}
