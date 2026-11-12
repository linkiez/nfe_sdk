const START_C = 105;
const STOP = 106;

/**
 * Encodes a string of digits in Code 128 set C (two digits per symbol), the symbology the DAMDFE
 * specification uses for the access key.
 *
 * @param digits - An even number of digits.
 * @returns Symbol values: Start C, one value per digit pair, the check symbol (weighted sum
 *   modulo 103, Start counted with weight 1) and Stop.
 * @throws {Error} When the input is empty, odd in length or not numeric.
 */
export function encodeCode128C(digits: string): number[] {
  if (!/^(?:\d{2})+$/u.test(digits)) {
    throw new Error('Code 128C needs an even number of digits.');
  }
  const values = [...digits.matchAll(/\d{2}/gu)].map(([pair]) => Number(pair));
  const checksum =
    (START_C + values.reduce((sum, value, index) => sum + value * (index + 1), 0)) % 103;

  return [START_C, ...values, checksum, STOP];
}
