import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag';

import { TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc';

/**
 * Grupo de informações para Agência Reguladora
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Registro Nacional de Transportadores Rodoviários de Carga Registro obrigatório do emitente do MDF-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  public RNTRC?: TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc;
  /**
   * Dados do CIOT
   */
  public infCIOT?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot;
  /**
   * Informações de Vale Pedágio Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes.
   */
  public valePed?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp;
  /**
   * Grupo de informações dos contratantes do serviço de transporte
   */
  public infContratante?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante;
  /**
   * Informações do Pagamento do Contrato
   */
  public infPag?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt instance.
   * Schema context: Grupo de informações para Agência Reguladora
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt';

    if (props) {
      assignSchemaProperties(this, props, ['RNTRC']);
      this.infCIOT = props.infCIOT
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot(
            props.infCIOT,
          )
        : undefined;
      this.valePed = props.valePed
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp(props.valePed)
        : undefined;
      this.infContratante = props.infContratante
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante(
            props.infContratante,
          )
        : undefined;
      this.infPag = props.infPag
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag(props.infPag)
        : undefined;
    }
  }
}
