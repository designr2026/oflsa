# Video Optimization Guide

This guide explains how to optimize the hero video for the website.

## Prerequisites

You need `ffmpeg` installed on your system. To install:

### Ubuntu/Debian:
```bash
sudo apt-get update
sudo apt-get install -y ffmpeg
```

### macOS:
```bash
brew install ffmpeg
```

### Windows:
Download from [ffmpeg.org](https://ffmpeg.org/download.html) or use:
```bash
choco install ffmpeg
```

## Running the Optimization

1. Make sure your original video is in `assets/hero_vid.mp4`

2. Run the optimization script:
```bash
node optimize-video.js
```

This will create:
- `public/assets/videos/hero_vid_1080p.mp4` - High quality (for fast connections)
- `public/assets/videos/hero_vid_720p.mp4` - Medium quality (for average connections)
- `public/assets/videos/hero_vid_480p.mp4` - Low quality (for slow connections)
- `public/assets/videos/hero_vid_poster.webp` - Poster image (shown before video loads)

## How It Works

The `AdaptiveVideo` component:
1. **Detects connection speed** using the Network Information API
2. **Lazy loads** the video (only when it's about to enter the viewport)
3. **Starts with appropriate quality** based on connection speed
4. **Automatically downgrades** if buffering occurs
5. **Upgrades quality** if connection improves
6. **Falls back to poster image** if all video sources fail

## Manual Optimization (if script doesn't work)

If you prefer to optimize manually, here are the ffmpeg commands:

### High Quality (1080p):
```bash
ffmpeg -i assets/hero_vid.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080:force_original_aspect_ratio=decrease" public/assets/videos/hero_vid_1080p.mp4
```

### Medium Quality (720p):
```bash
ffmpeg -i assets/hero_vid.mp4 -c:v libx264 -preset slow -crf 24 -c:a aac -b:a 96k -movflags +faststart -vf "scale=1280:720:force_original_aspect_ratio=decrease" public/assets/videos/hero_vid_720p.mp4
```

### Low Quality (480p):
```bash
ffmpeg -i assets/hero_vid.mp4 -c:v libx264 -preset slow -crf 26 -c:a aac -b:a 64k -movflags +faststart -vf "scale=854:480:force_original_aspect_ratio=decrease" public/assets/videos/hero_vid_480p.mp4
```

### Poster Image:
```bash
ffmpeg -i assets/hero_vid.mp4 -ss 00:00:01 -vframes 1 -vf "scale=1920:-1" -q:v 2 public/assets/videos/hero_vid_poster.webp
```

## Notes

- The `-crf` parameter controls quality (lower = better quality, larger file). Range: 18-28
- The `-preset slow` provides better compression but takes longer
- `-movflags +faststart` enables progressive download (video can start playing before fully downloaded)
- The component will work even if only one quality version exists (it will use whatever is available)


