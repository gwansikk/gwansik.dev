export function getReadingTime(content: string): number {
  return Math.floor(content.split(' ').length / 250) || 1;
}
