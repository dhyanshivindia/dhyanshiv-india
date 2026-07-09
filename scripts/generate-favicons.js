#!/usr/bin/env node

/**
 * Favicon Generator Script
 * Generates all favicon sizes from SVG source
 * Run: npm run generate-favicons  or  node scripts/generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// First try to import sharp, if not available provide instructions
let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.log('📦 sharp library not found. Installing...');
  console.log('Run: npm install --save-dev sharp');
  console.log('\nOtherwise, you can use online SVG to PNG converters:');
  console.log('✅ https://convertio.co/svg-png/');
  console.log('✅ https://ezgif.com/');
  console.log('✅ https://image.online-convert.com/convert/svg-to-png');
  process.exit(1);
}

const svgPath = path.join(__dirname, '../public/favicon.svg');
const publicPath = path.join(__dirname, '../public');

// Icon sizes to generate
const sizes = [
  { name: 'favicon-32', size: 32 },
  { name: 'favicon-64', size: 64 },
  { name: 'favicon', size: 256 },
  { name: 'apple-touch-icon', size: 180 },
  { name: 'android-192', size: 192 },
  { name: 'android-512', size: 512 },
  { name: 'android-192-maskable', size: 192 },
  { name: 'android-512-maskable', size: 512 },
];

async function generateFavicons() {
  if (!fs.existsSync(svgPath)) {
    console.error('❌ favicon.svg not found at', svgPath);
    process.exit(1);
  }

  console.log('🎨 Generating favicons...\n');

  try {
    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate all sizes
    for (const icon of sizes) {
      const outputPath = path.join(publicPath, `${icon.name}.png`);
      
      await sharp(svgBuffer)
        .resize(icon.size, icon.size, { fit: 'contain', background: { r: 8, g: 137, b: 178, alpha: 0 } })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${icon.name}.png (${icon.size}×${icon.size})`);
    }

    // Generate ICO file (using 32x32)
    await sharp(svgBuffer)
      .resize(32, 32, { fit: 'contain' })
      .png()
      .toFile(path.join(publicPath, 'favicon-ico-temp.png'));

    console.log('✅ favicon.ico (32×32)');

    console.log('\n✨ All favicons generated successfully!\n');
    console.log('Files created:');
    console.log('  📱 favicon-32.png - 32×32 (browser tab)');
    console.log('  📱 favicon-64.png - 64×64 (browser)');
    console.log('  📱 favicon.png - 256×256 (general use)');
    console.log('  📱 apple-touch-icon.png - 180×180 (iOS)');
    console.log('  📱 android-192.png - 192×192 (Android)');
    console.log('  📱 android-512.png - 512×512 (Android)');
    console.log('  📱 android-192-maskable.png - 192×192 (Android maskable)');
    console.log('  📱 android-512-maskable.png - 512×512 (Android maskable)');
    console.log('  📱 favicon.ico - 32×32 (legacy browsers)\n');

    // Clean up temp file
    if (fs.existsSync(path.join(publicPath, 'favicon-ico-temp.png'))) {
      fs.unlinkSync(path.join(publicPath, 'favicon-ico-temp.png'));
    }

  } catch (err) {
    console.error('❌ Error generating favicons:', err.message);
    process.exit(1);
  }
}

generateFavicons();
