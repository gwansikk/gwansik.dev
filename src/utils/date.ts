export function formatDate(
  date: string,
  locales: Intl.LocalesArgument = 'en-US',
) {
  return new Date(date).toLocaleDateString(locales, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
