import { spawnSync } from 'node:child_process';

import { RuntimeDependencyError } from './runtime-dependency-error.js';

const MIN_NODE_MAJOR = 18;
const MIN_NODE_MINOR = 18;

/** Result of probing the host for what the SDK needs at runtime. */
export interface RuntimeDependenciesReport {
  /** Node.js version in use (without the leading `v`). */
  readonly nodeVersion: string;
  /** True when Node.js is at least 18.18. */
  readonly nodeSupported: boolean;
  /** True when `xmllint` runs (required to validate NF-e XML against the official XSD). */
  readonly xmllintAvailable: boolean;
  /** First line printed by `xmllint --version`, when available. */
  readonly xmllintVersion?: string;
  /** One sentence per missing or unsupported dependency; empty when everything is available. */
  readonly problems: readonly string[];
}

/** Overrides used by tests; production code calls the function without options. */
export interface RuntimeDependenciesOptions {
  /** Node.js version to check instead of `process.versions.node`. */
  readonly nodeVersion?: string;
  /** Runs `xmllint --version`; returns its text, or `undefined` when it cannot run. */
  readonly probeXmllint?: () => string | undefined;
}

function defaultProbeXmllint(): string | undefined {
  const result = spawnSync('xmllint', ['--version'], {
    encoding: 'utf-8',
    timeout: 5000,
  });
  if (result.error || result.status !== 0) return undefined;

  // `xmllint --version` writes to stderr on most builds.
  return `${result.stderr ?? ''}${result.stdout ?? ''}`.trim();
}

function isSupportedNode(version: string): boolean {
  const [major, minor] = version.split('.').map((part) => Number.parseInt(part, 10));

  return (
    Number.isInteger(major) &&
    Number.isInteger(minor) &&
    (major > MIN_NODE_MAJOR || (major === MIN_NODE_MAJOR && minor >= MIN_NODE_MINOR))
  );
}

/**
 * Probes the host for the SDK's runtime dependencies without throwing.
 *
 * @param options - Test overrides.
 * @returns A report listing availability and, in `problems`, what is missing.
 */
export function checkRuntimeDependencies(
  options?: RuntimeDependenciesOptions,
): RuntimeDependenciesReport {
  const nodeVersion = options?.nodeVersion ?? process.versions.node;
  const nodeSupported = isSupportedNode(nodeVersion);
  const xmllintText = (options?.probeXmllint ?? defaultProbeXmllint)();
  const xmllintAvailable = xmllintText !== undefined;
  const problems: string[] = [];

  if (!nodeSupported) {
    problems.push(`Node.js ${MIN_NODE_MAJOR}.${MIN_NODE_MINOR} or newer is required; found ${nodeVersion}.`);
  }
  if (!xmllintAvailable) {
    problems.push(
      'xmllint (libxml2) is required to validate NF-e XML against the official XSD but was not found in PATH.',
    );
  }

  return {
    nodeVersion,
    nodeSupported,
    xmllintAvailable,
    ...(xmllintText ? { xmllintVersion: xmllintText.split('\n')[0] } : {}),
    problems,
  };
}

/**
 * Fails fast when the host lacks what the SDK needs: Node.js 18.18+ and `xmllint`.
 *
 * @param options - Test overrides.
 * @returns The report, when everything is available.
 * @throws {RuntimeDependencyError} Listing every missing or unsupported dependency.
 */
export function assertRuntimeDependencies(
  options?: RuntimeDependenciesOptions,
): RuntimeDependenciesReport {
  const report = checkRuntimeDependencies(options);
  if (report.problems.length > 0) {
    throw new RuntimeDependencyError(report.problems);
  }

  return report;
}
