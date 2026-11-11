import {
  assertRuntimeDependencies,
  checkRuntimeDependencies,
} from '../../src/canonical/validation/assert-runtime-dependencies.js';
import { RuntimeDependencyError } from '../../src/canonical/validation/runtime-dependency-error.js';

const XMLLINT = 'xmllint: using libxml version 21109';

describe('checkRuntimeDependencies', () => {
  it('reports a supported Node.js and an available xmllint', () => {
    const report = checkRuntimeDependencies({
      nodeVersion: '22.1.0',
      probeXmllint: () => XMLLINT,
    });

    expect(report).toEqual({
      nodeVersion: '22.1.0',
      nodeSupported: true,
      xmllintAvailable: true,
      xmllintVersion: XMLLINT,
      problems: [],
    });
  });

  it.each([
    ['18.18.0', true],
    ['18.19.1', true],
    ['20.0.0', true],
    ['18.17.9', false],
    ['16.20.2', false],
    ['abc', false],
    ['', false],
  ])('treats Node.js %s as supported=%s', (nodeVersion, supported) => {
    expect(
      checkRuntimeDependencies({ nodeVersion, probeXmllint: () => XMLLINT })
        .nodeSupported,
    ).toBe(supported);
  });

  it('reports a missing xmllint without throwing', () => {
    const report = checkRuntimeDependencies({
      nodeVersion: '22.1.0',
      probeXmllint: () => undefined,
    });

    expect(report.xmllintAvailable).toBe(false);
    expect(report.xmllintVersion).toBeUndefined();
    expect(report.problems).toHaveLength(1);
    expect(report.problems[0]).toContain('xmllint');
  });

  it('keeps only the first line of the xmllint version', () => {
    expect(
      checkRuntimeDependencies({
        nodeVersion: '22.1.0',
        probeXmllint: () => `${XMLLINT}\nCompiled against libxml2`,
      }).xmllintVersion,
    ).toBe(XMLLINT);
  });

  it('probes the real host without throwing', () => {
    const report = checkRuntimeDependencies();

    expect(report.nodeVersion).toBe(process.versions.node);
    expect(typeof report.xmllintAvailable).toBe('boolean');
  });
});

describe('assertRuntimeDependencies', () => {
  it('returns the report when everything is available', () => {
    expect(
      assertRuntimeDependencies({
        nodeVersion: '22.1.0',
        probeXmllint: () => XMLLINT,
      }).problems,
    ).toEqual([]);
  });

  it('throws one error listing every problem', () => {
    let failure: unknown;
    try {
      assertRuntimeDependencies({
        nodeVersion: '16.0.0',
        probeXmllint: () => undefined,
      });
    } catch (error) {
      failure = error;
    }

    expect(failure).toBeInstanceOf(RuntimeDependencyError);
    const error = failure as RuntimeDependencyError;
    expect(error.name).toBe('RuntimeDependencyError');
    expect(error.problems).toHaveLength(2);
    expect(error.message).toContain('Node.js 18.18');
    expect(error.message).toContain('xmllint');
  });
});
