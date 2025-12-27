import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputVideo = path.join(__dirname, 'assets', 'hero_vid.mp4');
const outputDir = path.join(__dirname, 'public', 'assets', 'videos');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🎬 Starting video optimization...\n');

// Check if input video exists
if (!fs.existsSync(inputVideo)) {
  console.error(`❌ Error: Video file not found at ${inputVideo}`);
  process.exit(1);
}

// Get video info
console.log('📊 Getting video information...');
try {
  const info = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${inputVideo}"`, {
    encoding: 'utf-8'
  });
  const videoInfo = JSON.parse(info);
  const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
  console.log(`   Resolution: ${videoStream.width}x${videoStream.height}`);
  console.log(`   Duration: ${parseFloat(videoInfo.format.duration).toFixed(2)}s`);
  console.log(`   Original size: ${(parseInt(videoInfo.format.size) / 1024 / 1024).toFixed(2)}MB\n`);
} catch (error) {
  console.log('   Could not get video info, proceeding with optimization...\n');
}

// Generate poster image (first frame)
console.log('🖼️  Generating poster image...');
const posterPath = path.join(outputDir, 'hero_vid_poster.webp');
try {
  execSync(`ffmpeg -i "${inputVideo}" -ss 00:00:01 -vframes 1 -vf "scale=1920:-1" -q:v 2 "${posterPath}"`, {
    stdio: 'inherit'
  });
  const posterSize = fs.statSync(posterPath).size / 1024;
  console.log(`   ✅ Poster created: ${posterSize.toFixed(2)}KB\n`);
} catch (error) {
  console.error('   ❌ Failed to create poster image');
}

// Optimize video - High quality (for good connections)
console.log('🎥 Creating high quality version (1080p)...');
const highQualityPath = path.join(outputDir, 'hero_vid_1080p.mp4');
try {
  execSync(`ffmpeg -i "${inputVideo}" -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080:force_original_aspect_ratio=decrease" "${highQualityPath}"`, {
    stdio: 'inherit'
  });
  const highSize = fs.statSync(highQualityPath).size / 1024 / 1024;
  console.log(`   ✅ High quality: ${highSize.toFixed(2)}MB\n`);
} catch (error) {
  console.error('   ❌ Failed to create high quality version');
}

// Optimize video - Medium quality (for average connections)
console.log('🎥 Creating medium quality version (720p)...');
const mediumQualityPath = path.join(outputDir, 'hero_vid_720p.mp4');
try {
  execSync(`ffmpeg -i "${inputVideo}" -c:v libx264 -preset slow -crf 24 -c:a aac -b:a 96k -movflags +faststart -vf "scale=1280:720:force_original_aspect_ratio=decrease" "${mediumQualityPath}"`, {
    stdio: 'inherit'
  });
  const mediumSize = fs.statSync(mediumQualityPath).size / 1024 / 1024;
  console.log(`   ✅ Medium quality: ${mediumSize.toFixed(2)}MB\n`);
} catch (error) {
  console.error('   ❌ Failed to create medium quality version');
}

// Optimize video - Low quality (for slow connections)
console.log('🎥 Creating low quality version (480p)...');
const lowQualityPath = path.join(outputDir, 'hero_vid_480p.mp4');
try {
  execSync(`ffmpeg -i "${inputVideo}" -c:v libx264 -preset slow -crf 26 -c:a aac -b:a 64k -movflags +faststart -vf "scale=854:480:force_original_aspect_ratio=decrease,format=yuv420p" "${lowQualityPath}"`, {
    stdio: 'inherit'
  });
  const lowSize = fs.statSync(lowQualityPath).size / 1024 / 1024;
  console.log(`   ✅ Low quality: ${lowSize.toFixed(2)}MB\n`);
} catch (error) {
  // Try with 852 width (divisible by 2)
  try {
    execSync(`ffmpeg -i "${inputVideo}" -c:v libx264 -preset slow -crf 26 -c:a aac -b:a 64k -movflags +faststart -vf "scale=852:480:force_original_aspect_ratio=decrease" "${lowQualityPath}"`, {
      stdio: 'inherit'
    });
    const lowSize = fs.statSync(lowQualityPath).size / 1024 / 1024;
    console.log(`   ✅ Low quality: ${lowSize.toFixed(2)}MB\n`);
  } catch (error2) {
    console.error('   ❌ Failed to create low quality version');
  }
}

// Summary
console.log('📦 Optimization Summary:');
console.log('   Files created in:', outputDir);
if (fs.existsSync(highQualityPath)) {
  console.log(`   ✅ hero_vid_1080p.mp4 (High quality)`);
}
if (fs.existsSync(mediumQualityPath)) {
  console.log(`   ✅ hero_vid_720p.mp4 (Medium quality)`);
}
if (fs.existsSync(lowQualityPath)) {
  console.log(`   ✅ hero_vid_480p.mp4 (Low quality)`);
}
if (fs.existsSync(posterPath)) {
  console.log(`   ✅ hero_vid_poster.webp (Poster image)`);
}
console.log('\n✨ Video optimization complete!');

