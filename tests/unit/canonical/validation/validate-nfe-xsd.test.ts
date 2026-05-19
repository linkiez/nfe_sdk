import * as childProcess from 'node:child_process';
import { validateNFeXsd } from '../../../../src/canonical/validation/validate-nfe-xsd.js';

jest.mock('node:child_process');

const spawnSyncMock = jest.mocked(childProcess.spawnSync);

const VALID_NFE_XML =
  '<?xml version="1.0" encoding="utf-8"?><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="4.00" Id="NFe35160512345678000123550010000000011000000011"></infNFe></NFe>';
const INVALID_XML = '<broken>';

describe('validateNFeXsd', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns valid classification when xmllint succeeds with exit code 0', () => {
    spawnSyncMock.mockReturnValue({
      status: 0,
      stdout: Buffer.from(''),
      stderr: Buffer.from(''),
      pid: 1,
      output: [],
      signal: null,
      error: undefined,
    });

    const result = validateNFeXsd(VALID_NFE_XML);

    expect(result.classification).toBe('valid');
    expect(result.available).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns invalid classification with errors when xmllint exits with non-zero', () => {
    spawnSyncMock.mockReturnValue({
      status: 1,
      stdout: Buffer.from(''),
      stderr: Buffer.from('- :1: element broken: Schemas validity error\n'),
      pid: 1,
      output: [],
      signal: null,
      error: undefined,
    });

    const result = validateNFeXsd(INVALID_XML);

    expect(result.classification).toBe('invalid');
    expect(result.available).toBe(true);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toContain('Schemas validity error');
  });

  it('returns xmllint-unavailable classification when xmllint is not installed', () => {
    spawnSyncMock.mockReturnValue({
      status: null,
      stdout: Buffer.from(''),
      stderr: Buffer.from(''),
      pid: 0,
      output: [],
      signal: null,
      error: new Error('spawnSync xmllint ENOENT'),
    });

    const result = validateNFeXsd(VALID_NFE_XML);

    expect(result.classification).toBe('xmllint-unavailable');
    expect(result.available).toBe(false);
    expect(result.errors).toHaveLength(0);
  });

  it('returns execution-error when spawnSync throws unexpectedly', () => {
    spawnSyncMock.mockImplementation(() => {
      throw new Error('unexpected spawn error');
    });

    const result = validateNFeXsd(VALID_NFE_XML);

    expect(result.classification).toBe('execution-error');
    expect(result.available).toBe(false);
  });

  it('accepts custom xsdDir option and still calls xmllint', () => {
    spawnSyncMock.mockReturnValue({
      status: 0,
      stdout: Buffer.from(''),
      stderr: Buffer.from(''),
      pid: 1,
      output: [],
      signal: null,
      error: undefined,
    });

    const result = validateNFeXsd(VALID_NFE_XML, { xsdDir: '/custom/xsd' });

    expect(spawnSyncMock).toHaveBeenCalledTimes(1);
    const callArgs = spawnSyncMock.mock.calls[0];
    const schemaArg = callArgs[1]?.find(
      (arg) => typeof arg === 'string' && arg.includes('nfe_v4.00.xsd'),
    );
    expect(schemaArg).toContain('/custom/xsd');
    expect(result.classification).toBe('valid');
  });
});
