import sharp from 'sharp';

export async function getImageMetadata(imagePath: string) {
  const path = `${process.cwd()}/public${imagePath}`;
  const metadata = await sharp(path).metadata();
  const resizedImage = await sharp(path).resize(10).toBuffer();
  const blurDataURL = `data:image/${metadata.format};base64,${resizedImage.toString('base64')}`;

  let width = metadata.width ?? 0;
  let height = metadata.height ?? 0;

  if (width < 640 && width > 0) {
    const aspectRatio = height / width;
    width = 640;
    height = Math.round(width * aspectRatio);
  }

  return {
    src: imagePath,
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    blurDataURL,
  };
}
