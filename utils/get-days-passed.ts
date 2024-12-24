// Returns how many days have passed from the given date to today.

export function getDaysPassed(dateString: string): string {
  const inputDate = new Date(dateString);
  const today = new Date();

  // Normalize both dates to midnight for accurate day comparison
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const diffTime = today.getTime() - inputDate.getTime();
  const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return daysPassed === 0 ? "today" : `${daysPassed} days ago`;
}
