import sharp from 'sharp';

export async function getImageMetaData(imagePath: string) {
  const path = `${process.cwd()}/public${imagePath}`;
  const metadata = await sharp(path).metadata();
  const buffer = await sharp(path).resize(10).toBuffer();
  const blurDataURL = `data:image/${metadata.format};base64,${buffer.toString('base64')}`;

  return {
    src: imagePath,
    width: metadata.width,
    height: metadata.height,
    blurDataURL,
  };
}
