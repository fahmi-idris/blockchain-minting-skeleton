import { format } from 'date-fns';
/**
 *
 * @param value
 * @returns string
 */
export const toUppercase = (value: string): string => value.toUpperCase();

/**
 *
 * @param value
 * @returns string
 */
export const toCapitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

/**
 *
 * @param date
 * @returns string
 */
export const dateFormatter = (date: number) => {
  const dateResult = format(new Date(date * 1000), 'd MMM yyyy HH:mm a');
  return dateResult;
};

/**
 *
 * @param address
 * @returns string
 */
export const addressFormatter = (address: string) => {
  return `${address.substring(0, 6)}....${address.slice(address.length - 4)}`;
};
