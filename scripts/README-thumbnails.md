# YouTube Thumbnails Download Script

This script downloads YouTube video thumbnails from `levelsSitemap.json` and converts them to WebP format with 70% quality.

## How it works

1. **YouTube Thumbnail URL Pattern**:

   ```
   https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg
   ```

2. **Video ID Extraction**:
   The script uses regex to extract YouTube video IDs from full URLs

3. **Image Processing**:
   - Downloads original JPG thumbnails
   - Converts to WebP format with 70% quality using Sharp
   - Saves to `public/images/thumbnails/`

## Prerequisites

Make sure you have the required dependency installed:

```bash
npm install sharp
```

## Usage

Run the script with:

```bash
npm run download:thumbnails
```

## Output

- **File naming**: `level-{ID}.webp` (e.g., `level-11.webp`, `level-25.webp`)
- **Location**: `public/images/thumbnails/`
- **Format**: WebP with 70% quality
- **Skip existing**: The script will skip files that already exist

## Features

- ✅ **Batch processing**: Downloads all levels from `levelsSitemap.json`
- ✅ **Quality optimization**: 70% WebP compression for optimal size/quality
- ✅ **Error handling**: Continues processing even if some downloads fail
- ✅ **Progress logging**: Shows download progress and results
- ✅ **Respectful delays**: 100ms delay between requests
- ✅ **Skip existing**: Won't re-download existing files

## Example Output

```
Starting download of 76 thumbnails...
Output directory: /path/to/public/images/thumbnails

📥 Downloading level 11...
✓ Converted: level-11.webp
📥 Downloading level 12...
✓ Converted: level-12.webp
⏭ Skipping level 13 (already exists)
...

==================================================
Download complete!
✓ Success: 75
✗ Errors: 1
📁 Files saved to: /path/to/public/images/thumbnails
```

## Integration with level-showcase.tsx

After running this script, you can update the level showcase component to use local images instead of YouTube URLs:

```typescript
// Instead of:
src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}

// Use:
src={`/images/thumbnails/level-${level.id}.webp`}
```

This will improve loading performance and provide better user experience.
