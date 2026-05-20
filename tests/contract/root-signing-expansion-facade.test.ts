import * as publicApi from '../../src/index';

describe('root signing expansion facade contract', () => {
  it('publishes the event-signing facade from the root entrypoint', () => {
    expect(
      Object.keys(publicApi).sort((left, right) => left.localeCompare(right)),
    ).toContain('signEventXml');
  });

  it('keeps signing-expansion internals outside the root facade surface', () => {
    expect(publicApi).not.toHaveProperty('eventSignatureTarget');
    expect(publicApi).not.toHaveProperty('verifySignedEventXml');
  });
});
