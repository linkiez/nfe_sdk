import { classifyTransportOutcome } from '../../src/canonical/transport/transport-outcome-classification';

describe('transport outcome classification', () => {
  it('classifies timeout, unavailable, usage-error, functional-rejection, and protocol-error distinctly', () => {
    expect(
      classifyTransportOutcome({
        failureKind: 'timeout',
        service: 'nfe-status-service',
      }),
    ).toBe('timeout');
    expect(
      classifyTransportOutcome({
        applicationStatusCode: '108',
        failureKind: 'application-response',
        service: 'nfe-status-service',
      }),
    ).toBe('unavailable');
    expect(
      classifyTransportOutcome({
        failureKind: 'usage-error',
        service: 'nfe-authorization',
      }),
    ).toBe('usage-error');
    expect(
      classifyTransportOutcome({
        applicationStatusCode: '204',
        failureKind: 'application-response',
        service: 'nfe-authorization',
      }),
    ).toBe('functional-rejection');
    expect(
      classifyTransportOutcome({
        failureKind: 'protocol-error',
        service: 'nfe-authorization',
      }),
    ).toBe('protocol-error');
  });
});
