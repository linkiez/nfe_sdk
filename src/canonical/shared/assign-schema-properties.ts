/**
 * Copies declared schema fields while preserving the generated class discriminator.
 *
 * @param target - Generated schema model being initialized.
 * @param source - Values used to initialize the model.
 * @param propertyNames - Declared fields copied by the generated constructor.
 */
export function assignSchemaProperties(target: object, source: object, propertyNames: readonly string[]): void {
  for (const key of propertyNames) {
    if (key === '@class') {
      continue;
    }

    if (!Reflect.set(target, key, Reflect.get(source, key))) {
      throw new TypeError(`Unable to assign schema property "${key}".`);
    }
  }
}
