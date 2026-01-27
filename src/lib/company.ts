/**
 * Company constants and utility functions
 */

export const COMPANY = {
  FOUNDING_YEAR: 1993,
  NAME: 'Agencia Pleamar SA',
  LEGAL_NAME: 'Agencia Pleamar Sociedad Anónima',
} as const;

/**
 * Calculate years of experience since founding
 * @returns Number of years since company was founded
 */
export function getYearsOfExperience(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - COMPANY.FOUNDING_YEAR;
}

/**
 * Get years of experience as a formatted string
 * @returns String like "32 años" or "33 años"
 */
export function getYearsOfExperienceText(): string {
  return `${getYearsOfExperience()} años`;
}
