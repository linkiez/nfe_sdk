import { TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat';

/**
 * Tipo Resultado da Consulta do Status do Serviço MDFe
 */
export interface IPlMdFe300BNt012025105ConsStatServTiposBasicoV300RetConsStatServ {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * Código da UF responsável pelo serviço
   */
  cUF?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD
   */
  dhRecbto?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD. Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados.
   */
  dhRetorno?: unknown;
  /**
   * Tipo Versão do Consulta do Status do Serviço MDFe
   */
  $versao?: TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat;
}
