const fs = require("fs");
const path = require("path");
const https = require("https");

// Load the levels data
const levelsData = require("../data/levelsSitemap.json");

// Output directory for thumbnails
const outputDir = path.join(__dirname, "../public/images/thumbnails");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to extract YouTube video ID from URL
function getYouTubeVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Function to download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
        file.on("error", reject);
      })
      .on("error", reject);
  });
}

// Main function to process all levels
async function downloadAllThumbnails() {
  console.log(`Starting download of ${levelsData.length} thumbnails...`);
  console.log(`Output directory: ${outputDir}\n`);
  console.log(
    `Note: Images will be saved as JPG format (original YouTube quality)`
  );
  console.log(`You can manually convert them to WebP later if needed.\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const level of levelsData) {
    try {
      const videoId = getYouTubeVideoId(level.videoUrl);
      if (!videoId) {
        console.error(`✗ Failed to extract video ID from: ${level.videoUrl}`);
        errorCount++;
        continue;
      }

      // YouTube thumbnail URL (maxresdefault for highest quality)
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      // File path
      const filename = `level-${level.id}.jpg`;
      const filepath = path.join(outputDir, filename);

      // Skip if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`⏭ Skipping level ${level.id} (already exists)`);
        continue;
      }

      console.log(`📥 Downloading level ${level.id}...`);

      // Download image
      await downloadImage(thumbnailUrl, filepath);

      successCount++;

      // Add small delay to be respectful to YouTube servers
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`✗ Error processing level ${level.id}:`, error.message);
      errorCount++;
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log(`Download complete!`);
  console.log(`✓ Success: ${successCount}`);
  console.log(`✗ Errors: ${errorCount}`);
  console.log(`📁 Files saved to: ${outputDir}`);
  console.log(
    `\n💡 Tip: You can use online tools or other software to convert JPG to WebP later.`
  );
  console.log(`   Some options:`);
  console.log(`   - Online: https://convertio.co/jpg-webp/`);
  console.log(`   - Batch tools: ImageMagick, GIMP, Photoshop`);
}

// Run the script
downloadAllThumbnails().catch(console.error);
