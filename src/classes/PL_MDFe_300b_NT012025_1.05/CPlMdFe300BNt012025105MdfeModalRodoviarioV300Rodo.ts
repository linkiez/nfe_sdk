import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao';

/**
 * Informações do modal Rodoviário
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Grupo de informações para Agência Reguladora
   */
  public infANTT?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt;
  /**
   * Dados do Veículo com a Tração
   */
  public veicTracao?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao;
  /**
   * Dados dos reboques Código interno do veículo
   */
  public veicReboque?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque;
  /**
   * Lacres
   */
  public lacRodo?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo instance.
   * Schema context: Informações do modal Rodoviário
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo';

    if (props) {
      this.infANTT = props.infANTT
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt(
            props.infANTT,
          )
        : undefined;
      this.veicTracao = props.veicTracao
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao(
            props.veicTracao,
          )
        : undefined;
      this.veicReboque = props.veicReboque
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque(
            props.veicReboque,
          )
        : undefined;
      this.lacRodo = props.lacRodo
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo(
            props.lacRodo,
          )
        : undefined;
    }
  }
}
