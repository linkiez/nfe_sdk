import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe';

import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa';

import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe';

import { TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual do MDF-e
 */
export interface IPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300RetConsSitMdFe {
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
   * Retornar protMDFe da versão correspondente do MDF-e autorizado
   */
  protMDFe?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe;
  /**
   * Retornar procEventoMDFe da versão correspondente do evento MDF-e autorizado
   */
  procEventoMDFe?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe;
  /**
   * Grupo de informações do compartilhamento do MDFe com InfraSA para geração do DTe
   */
  procInfraSA?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa;
  /**
   * Tipo Versão do Consulta situação de MDF-e - 1.00
   */
  $versao?: TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe;
}
