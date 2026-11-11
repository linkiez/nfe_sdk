import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc } from './CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc';

/**
 * Schema XML de validação do evento de inclusão de DFe 110115
 */
export class CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  public nProt?: unknown;
  /**
   * Schema property c Mun Carrega.
   */
  public cMunCarrega?: unknown;
  /**
   * Informações dos Documentos fiscais vinculados ao manifesto
   */
  public infDoc?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe instance.
   * Schema context: Schema XML de validação do evento de inclusão de DFe 110115
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt', 'cMunCarrega']);
      this.infDoc = props.infDoc
        ? new CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc(props.infDoc)
        : undefined;
    }
  }
}
