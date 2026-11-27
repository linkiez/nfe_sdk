import { NFCeOperationalUsageError } from './errors.js';

const SUPPORTED_PAPER_WIDTH_MM = { maximum: 210, minimum: 56 } as const;
const DEFAULT_PAPER_WIDTH_MM = 80;

/**
 * Validates the paper width of the DANFE NFC-e (HTML or PDF).
 *
 * @param paperWidthMm - Requested width in millimeters; defaults to 80.
 * @returns The width to render.
 * @throws {NFCeOperationalUsageError} When the width is not between 56 and 210 mm.
 */
export default function resolveNFCePaperWidth(
  paperWidthMm: number | undefined,
): number {
  const width = paperWidthMm ?? DEFAULT_PAPER_WIDTH_MM;
  if (
    !Number.isFinite(width) ||
    width < SUPPORTED_PAPER_WIDTH_MM.minimum ||
    width > SUPPORTED_PAPER_WIDTH_MM.maximum
  ) {
    throw new NFCeOperationalUsageError(
      'renderNFCeSPDANFE paperWidthMm must be between 56 and 210 mm.',
    );
  }

  return width;
}
