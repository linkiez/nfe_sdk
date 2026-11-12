import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Schema de pedido de distribuição de DF-e de interesse
 */
export class CPlMdFeDistDFe100DistDFeIntV100DistDFeInt {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;

  //choice

  /**
   * CNPJ do interessado no DF-e
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  //choice

  /**
   * CPF do interessado no DF-e
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  //choice

  /**
   * Grupo para distribuir DF-e de interesse
   * @param arg - Branch value assigned to distNSU.
   */
  public distNSU(arg: unknown) {
    delete (this as any).consNSU;
    (this as any).distNSU = arg;
  }

  //choice

  /**
   * Grupo para consultar um DF-e a partir de um NSU específico
   * @param arg - Branch value assigned to consNSU.
   */
  public consNSU(arg: unknown) {
    delete (this as any).distNSU;
    (this as any).consNSU = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100DistDFeIntV100DistDFeInt instance.
   * Schema context: Schema de pedido de distribuição de DF-e de interesse
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFeDistDFe100DistDFeIntV100DistDFeInt) {
    this['@class'] = '.CPlMdFeDistDFe100DistDFeIntV100DistDFeInt';

    if (props) {
      assignSchemaProperties(this, props, ['tpAmb']);
    }
  }
}
