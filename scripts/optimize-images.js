import sharp from 'sharp';
import { readdir, rename } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public');
const outputDir = join(__dirname, '../public');

// Create blur versions of images
async function createBlurImage(inputPath, filename) {
  const outputFilename = filename.replace(/\.(jpg|png|jpeg)$/i, '-blur.$1');
  await sharp(inputPath)
    .resize(20) // tiny size for blur placeholder
    .blur(10)
    .toFile(join(outputDir, outputFilename));
}

// Optimize original images
async function optimizeImage(inputPath, filename) {
  const ext = extname(filename).toLowerCase();
  const outputPath = join(outputDir, filename);

  if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(inputPath)
      .jpeg({ quality: 80, progressive: true })
      .toFile(outputPath + '.tmp');
  } else if (ext === '.png') {
    await sharp(inputPath)
      .png({ quality: 80, progressive: true })
      .toFile(outputPath + '.tmp');
  }

  // Replace original with optimized version
  await rename(outputPath + '.tmp', outputPath);
}

async function processImages() {
  const files = await readdir(inputDir);
  
  for (const file of files) {
    if (!/\.(jpg|png|jpeg)$/i.test(file) || file.includes('-blur')) continue;
    
    const inputPath = join(inputDir, file);
    console.log(`Processing ${file}...`);
    
    try {
      await Promise.all([
        createBlurImage(inputPath, file),
        optimizeImage(inputPath, file)
      ]);
      console.log(`✓ Optimized ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

processImages().catch(console.error); 