import type {
  ExecuteNFeSoapServiceInput,
  TransportOutcome,
} from '../transport/contracts.js';
import { executeNFeSoapService as executeInternalNFeSoapService } from '../transport/execute-nfe-soap-service.js';

/**
 * Public facade wrapper for the supported SOAP transport execution flow.
 *
 * @param input - Raw service execution input provided by the integrator.
 * @returns Structured transport outcome for the attempted request.
 */
export async function executeNFeSoapService(
  input: ExecuteNFeSoapServiceInput,
): Promise<TransportOutcome> {
  return executeInternalNFeSoapService(input);
}