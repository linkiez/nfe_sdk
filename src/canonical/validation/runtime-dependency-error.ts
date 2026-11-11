/**
 * Raised by `assertRuntimeDependencies` when the host cannot run the SDK correctly.
 * `problems` lists every missing or unsupported dependency, in plain language.
 */
export class RuntimeDependencyError extends Error {
  readonly problems: readonly string[];

  constructor(problems: readonly string[]) {
    super(`Missing runtime dependencies: ${problems.join(' ')}`);
    this.name = 'RuntimeDependencyError';
    this.problems = problems;
  }
}
