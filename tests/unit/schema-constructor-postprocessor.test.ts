import { CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento } from '../../src/classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento';
import { CConSitNFeLeiauteConsSitNFeV201Evento } from '../../src/classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201Evento';
import { CConSitNFeLeiauteConsSitNFeV201InfEvento } from '../../src/classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201InfEvento';
import { assignSchemaProperties } from '../../src/canonical/shared/assign-schema-properties';
import { consolidateGeneratedConstructorAssignments } from '../../tools/consolidate-generated-constructor-assignments';

describe('generated schema constructor processing', () => {
  it('initializes a generated schema model through the consolidated helper', () => {
    const event =
      new CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento({
        cOrgaoAutor: '35',
        xJust: 'Justificativa válida',
      });

    expect(event.cOrgaoAutor).toBe('35');
    expect(event.xJust).toBe('Justificativa válida');
    expect(event['@class']).toBe(
      '.CEventoCancSubstV101Nt2018004EventoCancSubstV101E110112V100DetEvento',
    );
  });

  it('preserves nested schema model construction', () => {
    const infEvento = new CConSitNFeLeiauteConsSitNFeV201InfEvento();
    infEvento.tpAmb = '2';
    const event = new CConSitNFeLeiauteConsSitNFeV201Evento({ infEvento });

    expect(event.infEvento).toBeInstanceOf(
      CConSitNFeLeiauteConsSitNFeV201InfEvento,
    );
    expect(event.infEvento).not.toBe(infEvento);
    expect(event.infEvento?.tpAmb).toBe('2');
  });

  it('copies only declared properties and preserves the class discriminator', () => {
    class SchemaModel {
      public '@class'?: string;
      public value?: string;
    }

    const target = new SchemaModel();
    target['@class'] = '.Target';

    const source = Object.assign(new SchemaModel(), {
      '@class': '.Other',
      value: 'copied',
      extra: 'ignored',
    });

    assignSchemaProperties(target, source, ['value']);

    expect(target.value).toBe('copied');
    expect(target['@class']).toBe('.Target');
    expect(target).not.toHaveProperty('extra');
  });

  it('consolidates direct constructor copies and preserves nested conversions', () => {
    const source = [
      'import { Nested } from "./nested";',
      '',
      'export class Example {',
      '    public value?: string;',
      '    public nested?: Nested;',
      '',
      '    public constructor(props?: Example) {',
      '        this["@class"] = ".Example";',
      '        if (props) {',
      '            this.value = props.value;',
      '            this.nested = props.nested ? new Nested(props.nested) : undefined;',
      '        }',
      '    }',
      '}',
      '',
    ].join('\n');

    const result = consolidateGeneratedConstructorAssignments(
      '/repo/src/classes/group/Example.ts',
      source,
      '/repo/src/canonical/shared/assign-schema-properties.ts',
    );

    expect(result).toContain(
      "import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';",
    );
    expect(result).toContain('assignSchemaProperties(this, props, ["value"]);');
    expect(result).not.toContain('this.value = props.value;');
    expect(result).toContain(
      'this.nested = props.nested ? new Nested(props.nested) : undefined;',
    );
    expect(
      consolidateGeneratedConstructorAssignments(
        '/repo/src/classes/group/Example.ts',
        result,
        '/repo/src/canonical/shared/assign-schema-properties.ts',
      ),
    ).toBe(result);
  });

  it('leaves constructors without direct property copies unchanged', () => {
    const source = [
      'export class Example {',
      '    public nested?: Nested;',
      '    public constructor(props?: Example) {',
      '        if (props) {',
      '            this.nested = props.nested ? new Nested(props.nested) : undefined;',
      '        }',
      '    }',
      '}',
    ].join('\n');

    expect(
      consolidateGeneratedConstructorAssignments(
        '/repo/src/classes/Example.ts',
        source,
        '/repo/src/canonical/shared/assign-schema-properties.ts',
      ),
    ).toBe(source);
  });
});
