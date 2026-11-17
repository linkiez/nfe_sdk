import { NFCeOperationalUsageError } from './errors.js';

const LOGO_DATA_URI = /^data:image\/(?:png|jpeg|gif|webp);base64,[A-Za-z0-9+/=]+$/u;

/**
 * Validates the optional issuer logo of the NFC-e DANFE.
 *
 * The DANFE is a self-contained HTML document, so only an inline raster image data URI is
 * accepted (no remote URL, no SVG), which also keeps the value safe to place in an `src` attribute.
 *
 * @param logo - Caller-provided logo, if any.
 * @returns The trimmed logo, or `undefined` when none was given.
 * @throws {NFCeOperationalUsageError} When the logo is not a base64 PNG, JPEG, GIF or WebP data URI.
 */
export default function resolveNFCeLogo(
  logo: string | undefined,
): string | undefined {
  if (logo === undefined) return undefined;
  const value = logo.trim();
  if (!LOGO_DATA_URI.test(value)) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE logo must be a base64 PNG, JPEG, GIF or WebP data URI.',
    );
  }

  return value;
}
