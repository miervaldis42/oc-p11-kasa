// Types
type ObjectElementStringType = { [key: string]: string };

/**
 * Checks & Converts key & value in an object into String Type
 *
 * @param {Object} arg - Object with key(s) & value(s) as String
 * @returns Object with key & value as String
 */
export default function convertObjectKeyValueIntoStringType<
  T extends ObjectElementStringType
>(arg: T): T {
  return arg;
}
