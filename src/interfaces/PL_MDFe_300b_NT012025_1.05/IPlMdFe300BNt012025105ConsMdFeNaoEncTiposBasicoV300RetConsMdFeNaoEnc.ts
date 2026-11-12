import { CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe';

import { TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc';

/**
 * Tipo Retorno de Pedido de Consulta MDF-e não Encerrados
 */
export interface IPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300RetConsMdFeNaoEnc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o MDF-e
   */
  verAplic?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * código da UF de atendimento
   */
  cUF?: unknown;
  /**
   * Chaves de acesso do MDF-e não encerrado
   */
  infMDFe?: CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe;
  /**
   * Tipo Versão do Consulta MDF-e não encerrados - 3.00
   */
  $versao?: TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc;
}
